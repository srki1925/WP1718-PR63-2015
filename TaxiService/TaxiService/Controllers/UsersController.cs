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
    public class UsersController : ApiController
    { 
        [HttpGet]
        [Route("api/users/mydata")]
        public IHttpActionResult Get([FromUri]ApiRequest<string> request)
        {
            if (request == null || request.UserHash == null)
                return BadRequest();
            if (request.UserHash == null)
                return Unauthorized();
            if (!Repository.Instance.LoggedInUsers.TryGetValue(request.UserHash, out User user))
                return ResponseMessage(new HttpResponseMessage(HttpStatusCode.Forbidden));
            var data = new UserFullData() {
                name = user.Name,
                lastname = user.Lastname,
                email = user.Email,
                username = user.Username,
                phone = user.PhoneNumber,
                jmbg = user.JMBG,
                sex = user.Sex,
                carId = user.Role == UserRole.Driver ? (user as Driver).CarId : null
            };

            return Ok(data);
        }
        //GET: api/users
        public IEnumerable<string> Get()
        {
            var users = Repository.Instance.TaxiServiceRepository.Users.Where(x => x.Role != UserRole.Dispatcher).ToList();
            return users.Select(user => user.Username);
        }
        //GET: api/users/username
        public BasicUserData Get(string id)
        {
            if (!Repository.Instance.UserExists(id))
                return null;
            return Repository.Instance.TaxiServiceRepository.Users.Where(x => x.Username == id).Select(x => new BasicUserData()
            {
                username = x.Username,
                blocked = x.Blocked,
                email = x.Email,
                phone = x.PhoneNumber,
                type = x.Role
            }).ToArray()[0];
        }
        [HttpPut]
        // PUT: api/Users
        public IHttpActionResult Put([FromBody]ApiRequest<UserFullData> request)
        {
            if (request == null || request.UserHash == null)
                return BadRequest("User token missing");
            if (!Repository.Instance.LoggedInUsers.TryGetValue(request.UserHash, out User oldUser))
                return Unauthorized();

            oldUser.Name = request.Data.name;
            oldUser.Lastname = request.Data.lastname;
            oldUser.Email = request.Data.email;
            oldUser.PhoneNumber = request.Data.phone;
            oldUser.JMBG = request.Data.jmbg;

            Repository.Instance.TaxiServiceRepository.SaveChanges();

            return Ok();
        }

        [HttpPut]
        [Route("api/users/changepass")]
        public IHttpActionResult ChangePassword([FromBody]ApiRequest<string> request)
        {
            if (request == null || request.UserHash == null)
                return BadRequest("User token missing");
            if (!Repository.Instance.LoggedInUsers.TryGetValue(request.UserHash, out User oldUser))
                return Unauthorized();

            oldUser.Password = request.Data;
            Repository.Instance.TaxiServiceRepository.SaveChanges();
            return Ok();
        }
        [HttpPost]
        [Route("api/users/remove")]
        public IHttpActionResult Delete([FromBody]ApiRequest<string> request)
        {
            if (request == null || request.UserHash == null)
                return BadRequest();
            if (!Repository.Instance.LoggedInUsers.TryGetValue(request.UserHash, out User user))
                return Unauthorized();

            Repository.Instance.LoggedInUsers.Remove(request.UserHash);
            Repository.Instance.TaxiServiceRepository.Users.Remove(user);
            Repository.Instance.TaxiServiceRepository.SaveChanges();

            return Ok();
        }
        [HttpPost]
        [Route("api/users/block")]
        public IHttpActionResult Block([FromBody]ApiRequest<string> request)
        {
            if (request.UserHash == null)
                return Unauthorized();
            if (!Repository.Instance.LoggedInUsers.TryGetValue(request.UserHash, out User user) || user.Role != UserRole.Dispatcher)
                return Unauthorized();

            if (!AuthorizationService.BlockUser(request.Data))
                return NotFound();

            return Ok();
        }
        [HttpPost]
        [Route("api/users/unblock")]
        public IHttpActionResult Unblock([FromBody]ApiRequest<string> request)
        {
            if (request.UserHash == null)
                return Unauthorized();
            if (!Repository.Instance.LoggedInUsers.TryGetValue(request.UserHash, out User user) || user.Role != UserRole.Dispatcher)
                return Unauthorized();

            if (!AuthorizationService.UnblockUser(request.Data))
                return NotFound();

            return Ok();
        }
        [HttpPost]
        [Route("api/users/create")]
        public IHttpActionResult Create([FromBody]NewUser user)
        {
            if (user.UserType == UserRole.Dispatcher || user.UserType == UserRole.Guest)
                return ResponseMessage(new HttpResponseMessage(HttpStatusCode.Forbidden));
            if (Repository.Instance.UserExists(user.Username))
                return Conflict();

            if (user.UserType == UserRole.Driver)
            {
                if(user.CarNumber == null)
                    return BadRequest("carNumber is null");
                if (Repository.Instance.CarExists((int)user.CarNumber))
                    return BadRequest("carNumber doesn't exist");
                var car = Repository.Instance.TaxiServiceRepository.Cars.FirstOrDefault(x => x.CarNumber == user.CarNumber);
                var newDriver = new Driver()
                {
                    Username = user.Username,
                    Password = user.Password,
                    Email = user.Email,
                    JMBG = user.Jmbg,
                    Name = user.Name,
                    Lastname = user.Lastname,
                    PhoneNumber = user.Phone,
                    Role = user.UserType,
                    Sex = user.Sex,
                    Car = car,
                    Blocked = false,
                };
                car.Driver = newDriver;
                Repository.Instance.TaxiServiceRepository.Drivers.Add(newDriver);
                Repository.Instance.TaxiServiceRepository.SaveChanges();
            }
            else {
                var newUser = new User()
                {
                    Username = user.Username,
                    Password = user.Password,
                    Email = user.Email,
                    JMBG = user.Jmbg,
                    Name = user.Name,
                    Lastname = user.Lastname,
                    PhoneNumber = user.Phone,
                    Role = user.UserType,
                    Sex = user.Sex,
                    Blocked = false,
                };
                Repository.Instance.TaxiServiceRepository.Users.Add(newUser);
                Repository.Instance.TaxiServiceRepository.SaveChanges();
            }

            return Created(user.Username, user);
        }
    }
}
