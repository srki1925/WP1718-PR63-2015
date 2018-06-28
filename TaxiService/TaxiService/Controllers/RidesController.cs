using DAL;
using DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TaxiService.Models;

namespace TaxiService.Controllers
{
    public class RidesController : ApiController
    {
        /// <summary>
        /// Collection of rides converted to return just basic user information in compliance with GDPR
        /// </summary>
        /// <returns></returns>
        public IEnumerable<RideResponse> Get()
        {
            return Repository.Instance.TaxiServiceRepository.GetAllRides().ToList().Select(x => RideResponse.Convert(x));
        }
        /// <summary>
        /// Returns basic ride data in compliance with GDPR
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public RideResponse Get(int id)
        {
            var ride = Repository.Instance.TaxiServiceRepository.GetAllRides().FirstOrDefault(x => x.Id == id);
            return RideResponse.Convert(ride);
        }
        [HttpGet]
        [Route("api/rides/user/{username}")]
        public IHttpActionResult Get(string username)
        {
            if (!Repository.Instance.UserExists(username))
                return NotFound();

            var user = Repository.Instance.TaxiServiceRepository.Users.FirstOrDefault(x => x.Username == username);
            IEnumerable<RideResponse> rides;
            switch (user.Role)
            {
                case UserRole.Customer:
                    {
                        var ridesAllData = Repository.Instance.TaxiServiceRepository.GetAllRides().Where(x => x.CustomerId == user.Id).ToList();
                        rides = ridesAllData.Select(x => RideResponse.Convert(x));
                    }
                    break;
                case UserRole.Driver:
                    {
                        var ridesAllData = Repository.Instance.TaxiServiceRepository.GetAllRides().Where(x => x.DriverId == user.Id).ToList();
                        rides = ridesAllData.Select(x => RideResponse.Convert(x));
                    }
                    break;
                case UserRole.Dispatcher:
                    {
                        var ridesAllData = Repository.Instance.TaxiServiceRepository.GetAllRides().Where(x => x.DispatcherId == user.Id).ToList();
                        rides = ridesAllData.Select(x => RideResponse.Convert(x));
                    }
                    break;
                default:
                    rides = null;
                    break;
            }

            return Ok(rides);
        }

        public IHttpActionResult Post([FromBody]ApiRequest<RideRequest> requestedRide)
        {
            if (!Repository.Instance.LoggedInUsers.TryGetValue(requestedRide.UserHash, out User user))
                return Unauthorized();
            if (user.Blocked)
                return ResponseMessage(new HttpResponseMessage(HttpStatusCode.Forbidden));
            Ride persistentRide;
            if (user.Role == UserRole.Dispatcher)
            {
                var driver = Repository.Instance.TaxiServiceRepository.Drivers.FirstOrDefault(x => x.Username == requestedRide.Data.Driver);
                if (driver == null)
                    return BadRequest();
                persistentRide = new Ride()
                {
                    CarType = requestedRide.Data.CarType,
                    OrderTime = DateTime.Now,
                    Status = RideStatus.Processed,
                    CustomerLocation = new Location()
                    {
                        Address = requestedRide.Data.Location.address,
                        Latitude = (double)requestedRide.Data.Location.lat,
                        Longitude = (double)requestedRide.Data.Location.lng
                    },
                    Dispatcher = user,
                    Driver = driver
                };
                Repository.Instance.TaxiServiceRepository.Rides.Add(persistentRide);
                Repository.Instance.TaxiServiceRepository.Locations.Add(persistentRide.CustomerLocation);
                Repository.Instance.TaxiServiceRepository.SaveChanges();
            }
            else if (user.Role == UserRole.Customer)
            {
                persistentRide = new Ride()
                {
                    CarType = requestedRide.Data.CarType,
                    OrderTime = DateTime.Now,
                    Customer = user,
                    Status = RideStatus.Waiting,
                    CustomerLocation = new Location()
                    {
                        Address = requestedRide.Data.Location.address,
                        Latitude = (double)requestedRide.Data.Location.lat,
                        Longitude = (double)requestedRide.Data.Location.lng
                    },
                };
                Repository.Instance.TaxiServiceRepository.Rides.Add(persistentRide);
                Repository.Instance.TaxiServiceRepository.Locations.Add(persistentRide.CustomerLocation);
                Repository.Instance.TaxiServiceRepository.SaveChanges();
            }
            else
            {
                return ResponseMessage(new HttpResponseMessage(HttpStatusCode.Forbidden));
            }

            return Created($"{persistentRide.Id}", requestedRide.Data);
        }

        public IHttpActionResult Put([FromBody]ApiRequest<RideRequest> changedRide)
        {
            if (!Repository.Instance.LoggedInUsers.TryGetValue(changedRide.UserHash, out User user))
                return Unauthorized();
            if (user.Blocked)
                return ResponseMessage(new HttpResponseMessage(HttpStatusCode.Forbidden));
            if (changedRide.Data.RideId == null || Repository.Instance.TaxiServiceRepository.Rides.FirstOrDefault(x => x.Id == changedRide.Data.RideId) == null)
                return BadRequest("InvalidRideId");

            var ride = Repository.Instance.TaxiServiceRepository.Rides.Find(changedRide.Data.RideId);
            ride.CarType = changedRide.Data.CarType;
            ride.CustomerLocation = new Location()
            {
                Address = changedRide.Data.Location.address,
                Latitude = (double)changedRide.Data.Location.lat,
                Longitude = (double)changedRide.Data.Location.lng
            };
            Repository.Instance.TaxiServiceRepository.SaveChanges();

            return Ok();
        }


        [HttpPost]
        [Route("api/rides/accept")]
        public IHttpActionResult Accept([FromBody]ApiRequest<RideRequest> acceptedRide)
        {
            if (!Repository.Instance.LoggedInUsers.TryGetValue(acceptedRide.UserHash, out User user))
                return Unauthorized();
            if (user.Blocked)
                return ResponseMessage(new HttpResponseMessage(HttpStatusCode.Forbidden));

            if (acceptedRide.Data.RideId == null || Repository.Instance.TaxiServiceRepository.Rides.Find(acceptedRide.Data.RideId) == null)
                return BadRequest("InvalidRideId");
            var ride = Repository.Instance.TaxiServiceRepository.Rides.Find(acceptedRide.Data.RideId);

            if(user.Role == UserRole.Dispatcher)
            {
                if (acceptedRide.Data.Driver == null)
                    return BadRequest("InvalidDriverId");
                var driver = Repository.Instance.TaxiServiceRepository.Drivers.FirstOrDefault(x => x.Username == acceptedRide.Data.Driver);
                if (driver == null)
                    return BadRequest("Driver not found");
                ride.Dispatcher = user;
                ride.Status = RideStatus.Processed;
                ride.Driver = driver;
                ride.Driver.Free = false;
            }else if(user.Role == UserRole.Driver)
            {
                ride.Driver = user as Driver;
                ride.Status = RideStatus.Accepted;
                (user as Driver).Free = false;
            }
            Repository.Instance.TaxiServiceRepository.SaveChanges();

            return Ok();
        }
        [HttpPost]
        [Route("api/rides/finish")]
        public IHttpActionResult Finish([FromBody]ApiRequest<RideRequest> finishedRide)
        {
            if (!Repository.Instance.LoggedInUsers.TryGetValue(finishedRide.UserHash, out User user))
                return Unauthorized();
            if (user.Blocked || user.Role != UserRole.Driver)
                return ResponseMessage(new HttpResponseMessage(HttpStatusCode.Forbidden));
            if (user.Role != UserRole.Driver)
                return ResponseMessage(new HttpResponseMessage(HttpStatusCode.Forbidden));
            if (finishedRide.Data.RideId == null)
                return BadRequest("InvalidRideId");

            var ride = Repository.Instance.TaxiServiceRepository.Rides.Find(finishedRide.Data.RideId);
            if (ride == null)
                return NotFound();
            if (ride.Status != RideStatus.Accepted && ride.Status != RideStatus.Processed)
                return ResponseMessage(new HttpResponseMessage(HttpStatusCode.Forbidden));

            ride.Status = RideStatus.Succesful;
            ride.Destination = new Location()
            {
                Address = finishedRide.Data.Location?.address,
                Latitude = finishedRide.Data.Location?.lat ?? 0,
                Longitude = finishedRide.Data.Location?.lng ?? 0
            };
            ride.Fare = finishedRide.Data.Fare ?? 0;
            Repository.Instance.TaxiServiceRepository.SaveChanges();

            return Ok();
        }
        [HttpPost]
        [Route("api/rides/cancel")]
        public IHttpActionResult Cancel([FromBody]ApiRequest<int?> cancelledRide)
        {
            if (!Repository.Instance.LoggedInUsers.TryGetValue(cancelledRide.UserHash, out User user))
                return Unauthorized();
            if (user.Blocked || user.Role != UserRole.Customer)
                return ResponseMessage(new HttpResponseMessage(HttpStatusCode.Forbidden));
            if (cancelledRide.Data == null)
                return BadRequest("InvalidRideId");
            var ride = Repository.Instance.TaxiServiceRepository.Rides.Find(cancelledRide.Data);
            if (ride == null)
                return NotFound();
            if (ride.Status != RideStatus.Waiting)
                return ResponseMessage(new HttpResponseMessage(HttpStatusCode.Forbidden));

            ride.Status = RideStatus.Cancelled;
            Repository.Instance.TaxiServiceRepository.SaveChanges();
            return Ok();
        }
        [HttpPost]
        [Route("api/rides/fail")]
        public IHttpActionResult Fail([FromBody]ApiRequest<int?> failedRide)
        {
            if (!Repository.Instance.LoggedInUsers.TryGetValue(failedRide.UserHash, out User user))
                return Unauthorized();
            if (user.Blocked || user.Role != UserRole.Driver)
                return ResponseMessage(new HttpResponseMessage(HttpStatusCode.Forbidden));
            if (failedRide.Data == null)
                return BadRequest("InvalidRideId");
            var ride = Repository.Instance.TaxiServiceRepository.Rides.Find(failedRide.Data);
            if (ride == null)
                return NotFound();
            if (ride.Status == RideStatus.Failed)
                return Ok();
            if (ride.Status != RideStatus.Waiting && ride.Status != RideStatus.Accepted && ride.Status != RideStatus.Processed)
                return ResponseMessage(new HttpResponseMessage(HttpStatusCode.Forbidden));
            ride.Status = RideStatus.Failed;
            (user as Driver).Free = true;
            Repository.Instance.TaxiServiceRepository.SaveChanges();
            return Ok();
        }
        [HttpPost]
        [Route("api/rides/comment")]
        public IHttpActionResult Comment([FromBody]ApiRequest<CommentResponse> request)
        {
            if (!Repository.Instance.LoggedInUsers.TryGetValue(request.UserHash, out User user))
                return Unauthorized();
            if (user.Blocked || (user.Role != UserRole.Driver && user.Role != UserRole.Customer))
                return ResponseMessage(new HttpResponseMessage(HttpStatusCode.Forbidden));
            if (request.Data.rideId == null)
                return BadRequest("InvalidRideId");
            var ride = Repository.Instance.TaxiServiceRepository.Rides.Find(request.Data.rideId);
            if (ride == null)
                return NotFound();

            ride.Comment = new Comment()
            {
                Description = request.Data.description,
                Rate = (uint)(request.Data.rating ?? 0),
                PublishDate = DateTime.Now,
            };
            Repository.Instance.TaxiServiceRepository.SaveChanges();
            return Ok();
        }
    }
}
