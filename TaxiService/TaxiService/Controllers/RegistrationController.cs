using DAL;
using DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace TaxiService.Controllers
{
    public class RegistrationController : ApiController
    {
        [HttpPost]
        public IHttpActionResult Post([FromBody]User newUser)
        {
            if (Repository.Instance.UserExists(newUser.Username))
                return Conflict();

            Repository.Instance.TaxiServiceRepository.Users.Add(newUser);
            Repository.Instance.TaxiServiceRepository.SaveChanges();
            return Created("Users", newUser);
        }
    }
}
