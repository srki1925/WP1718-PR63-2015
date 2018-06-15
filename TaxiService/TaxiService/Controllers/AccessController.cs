using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Cryptography;
using System.Text;
using System.Web.Http;
using TaxiService.Models;

namespace TaxiService.Controllers
{
    public class AccessController : ApiController
    {
        [HttpPost]
        [Route("api/access/login")]
        public IHttpActionResult Login([FromBody]LoginParameters loginParameters)
        {
            string username = loginParameters.Username;
            string password = loginParameters.Password;
            var foundUser = Repository.Instance.TaxiServiceRepository.Users.FirstOrDefault(x => x.Username.Equals(username) && x.Password.Equals(password));
            if (foundUser == null)
                return Unauthorized();
            if (foundUser.Blocked)
                return ResponseMessage(new HttpResponseMessage(HttpStatusCode.Forbidden));

            var str = string.Concat(username, password);
            var shastr = AuthorizationService.ComputeSha512(str);

            if (Repository.Instance.LoggedInUsers.ContainsKey(shastr))
            {
                return Ok(shastr);
            }
            Repository.Instance.LoggedInUsers[shastr] = Repository.Instance.TaxiServiceRepository.Users.First(x => x.Username == username && x.Password == password);
            return Ok(shastr);
        }
        [HttpPost]
        [Route("api/access/logout")]
        public void Logout([FromBody] string userHash)
        {
            if (Repository.Instance.LoggedInUsers.ContainsKey(userHash))
            {
                Repository.Instance.LoggedInUsers.Remove(userHash);
            }
        }
    }
}
