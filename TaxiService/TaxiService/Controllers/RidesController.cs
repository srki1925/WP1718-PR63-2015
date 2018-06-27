using DAL;
using DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
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
            return Repository.Instance.TaxiServiceRepository.Rides.ToList().Select(x => RideResponse.Convert(x));
        }
        /// <summary>
        /// Returns basic ride data in compliance with GDPR
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public RideResponse Get(int id)
        {
            return RideResponse.Convert(Repository.Instance.TaxiServiceRepository.Rides.Find(id));
        }
        [HttpGet]
        [Route("api/rides/user/{username}")]
        public IHttpActionResult Get(string username)
        {
            if (!Repository.Instance.UserExists(username))
                return NotFound();

            var user = Repository.Instance.TaxiServiceRepository.Users.FirstOrDefault(x => x.Username == username);
            IEnumerable<Ride> rides;
            switch (user.Role)
            {
                case UserRole.Customer:
                    {
                        rides = Repository.Instance.TaxiServiceRepository.Rides.Where(x => x.CustomerId == user.Id).ToList();
                    }
                    break;
                case UserRole.Driver:
                    {
                        rides = Repository.Instance.TaxiServiceRepository.Rides.Where(x => x.DriverId == user.Id).ToList();
                    }
                    break;
                case UserRole.Dispatcher:
                    {
                        rides = Repository.Instance.TaxiServiceRepository.Rides.Where(x => x.DispatcherId == user.Id).ToList();
                    }
                    break;
                default:
                    break;
            }

            return Ok();
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
                var customer = Repository.Instance.TaxiServiceRepository.Users.Find(requestedRide.Data.CustomerId);
                if (customer == null)
                    return BadRequest("InvalidCustomerId");
                persistentRide = new Ride()
                {
                    CarType = requestedRide.Data.CarType,
                    OrderTime = DateTime.Now,
                    CustomerId = requestedRide.Data.CustomerId,
                    Status = RideStatus.Processed,
                    CustomerLocation = requestedRide.Data.Location,
                    DispatcherId = user.Id,
                    DriverId = requestedRide.Data.DriverId
                };
                //customer.CustomerRides.Add(persistentRide);
            }
            else if (user.Role == UserRole.Customer)
            {
                persistentRide = new Ride()
                {
                    CarType = requestedRide.Data.CarType,
                    OrderTime = DateTime.Now,
                    CustomerId = user.Id,
                    Status = RideStatus.Waiting,
                    CustomerLocation = requestedRide.Data.Location,
                };
            }
            else
            {
                return ResponseMessage(new HttpResponseMessage(HttpStatusCode.Forbidden));
            }

            Repository.Instance.TaxiServiceRepository.SaveChanges();

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
            ride.CustomerLocation = changedRide.Data.Location;
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
                if (acceptedRide.Data.DriverId == null || Repository.Instance.TaxiServiceRepository.Drivers.Find(acceptedRide.Data.DriverId) == null)
                    return BadRequest("InvalidDriverId");

                ride.DispatcherId = user.Id;
                ride.Status = RideStatus.Processed;
                ride.DriverId = acceptedRide.Data.DriverId;
            }else if(user.Role == UserRole.Driver)
            {
                ride.DriverId = user.Id;
                ride.Status = RideStatus.Accepted;
            }

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
            ride.Destination = finishedRide.Data.Location;
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
            if (ride.Status != RideStatus.Waiting && ride.Status != RideStatus.Accepted && ride.Status != RideStatus.Processed)
                return ResponseMessage(new HttpResponseMessage(HttpStatusCode.Forbidden));
            ride.Status = RideStatus.Failed;
            Repository.Instance.TaxiServiceRepository.SaveChanges();
            return Ok();
        }
    }
}
