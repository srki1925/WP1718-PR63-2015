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
        // GET: api/Users
        public IHttpActionResult Get([FromUri]ApiRequest<string> request)
        {
            if (request.UserHash == null)
                return Unauthorized();
            if (!Repository.Instance.LoggedInUsers.TryGetValue(request.UserHash, out User user))
                return ResponseMessage(new HttpResponseMessage(HttpStatusCode.Forbidden));

            return Ok(user);
        }
        [HttpPut]
        // PUT: api/Users
        public IHttpActionResult Put([FromBody]ApiRequest<User> request)
        {
            if (request.UserHash == null)
                return Unauthorized();
            if (!Repository.Instance.LoggedInUsers.TryGetValue(request.UserHash, out User oldUser) || oldUser.Blocked)
                return Unauthorized();
            //trying to change other user 
            if (request.Data.Id != oldUser.Id)
                return ResponseMessage(new HttpResponseMessage(HttpStatusCode.Forbidden));
            if (request.Data.Username != oldUser.Username)
                return BadRequest("Username can't be changed");

            //modify hash if user has changed password
            if (request.Data.Password != oldUser.Password)
            {
                Repository.Instance.LoggedInUsers.Remove(request.UserHash);
                var newHash = AuthorizationService.ComputeSha512(string.Concat(request.Data.Username, request.Data.Password));
                Repository.Instance.LoggedInUsers[newHash] = request.Data;
                return Ok(newHash);
            }
            Repository.Instance.TaxiServiceRepository.Users.Remove(oldUser);
            Repository.Instance.TaxiServiceRepository.Users.Add(request.Data);
            Repository.Instance.TaxiServiceRepository.SaveChanges();

            return Ok();
        }

        // DELETE: api/Users/5
        [HttpDelete]
        public IHttpActionResult Delete([FromUri]ApiRequest<string> request)
        {
            if (request.UserHash == null)
                return Unauthorized();
            if (!Repository.Instance.LoggedInUsers.TryGetValue(request.UserHash, out User user))
                return Unauthorized();

            Repository.Instance.LoggedInUsers.Remove(request.UserHash);
            Repository.Instance.TaxiServiceRepository.Users.Remove(user);
            Repository.Instance.TaxiServiceRepository.SaveChanges();

            return Ok();
        }
        [HttpGet]
        [Route("api/users/block")]
        public IHttpActionResult Block([FromUri]ApiRequest<string> request)
        {
            if (request.UserHash == null)
                return Unauthorized();
            if (!Repository.Instance.LoggedInUsers.TryGetValue(request.UserHash, out User user) || user.Role != UserRole.Dispatcher)
                return Unauthorized();

            if (!AuthorizationService.BlockUser(request.Data))
                return NotFound();

            return Ok();
        }
    }
}
