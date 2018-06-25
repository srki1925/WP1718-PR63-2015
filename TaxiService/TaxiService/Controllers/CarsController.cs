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
    public class CarsController : ApiController
    {
        // GET: api/Cars
        public IEnumerable<ResponseCar> Get()
        {
            var cars = Repository.Instance.TaxiServiceRepository.Cars.ToList();
            var ret = cars.Select(car => new ResponseCar() {
                CarNumber = car.CarNumber,
                Year = car.Year,
                CarType = car.Type,
                Registration = car.Registration,
                Driver = car.Driver != null ? car.Driver.Username : null
            }).ToList();


            return ret;
        }
        // GET: api/Cars/5
        public ResponseCar Get(int id)
        {

            if (Repository.Instance.CarExists(id))
            {
                var car = Repository.Instance.TaxiServiceRepository.Cars.Find(id);
                var response = new ResponseCar()
                {
                    CarNumber = car.CarNumber,
                    CarType = car.Type,
                    Driver = car.Driver != null ? car.Driver.Username : null,
                    Registration = car.Registration,
                    Year = car.Year
                };
                return response;
            }
            return null;
        }
        [HttpGet]
        [Route("api/cars/freecars")]
        public IEnumerable<ResponseCar> GetFreeCars()
        {
            var cars = Repository.Instance.TaxiServiceRepository.Cars.ToList();
            var ret = cars.Where(car => car.Driver == null).Select(car => new ResponseCar()
            {
                CarNumber = car.CarNumber,
                Year = car.Year,
                CarType = car.Type,
                Registration = car.Registration,
                Driver = car.Driver != null ? car.Driver.Username : null
            }).ToList();

            return ret;
        }

        // POST: api/Cars
        public IHttpActionResult Post([FromBody]ApiRequest<ResponseCar> request)
        {
            if (!Repository.Instance.LoggedInUsers.TryGetValue(request.UserHash, out User user))
                return Unauthorized();
            if (user.Role != UserRole.Dispatcher)
                return ResponseMessage(new HttpResponseMessage(HttpStatusCode.Forbidden));

            var newCar = new Car()
            {
                Registration = request.Data.Registration,
                Type = request.Data.CarType,
                Year = request.Data.Year,
            };

            Repository.Instance.TaxiServiceRepository.Cars.Add(newCar);
            Repository.Instance.TaxiServiceRepository.SaveChanges();

            return Created($"{newCar.CarNumber}",request.Data);
        }

        // PUT: api/Cars/5
        public IHttpActionResult Put(int id, [FromBody]ApiRequest<ResponseCar> request)
        {
            if (!Repository.Instance.LoggedInUsers.TryGetValue(request.UserHash, out User user))
                return Unauthorized();
            if (user.Role != UserRole.Dispatcher)
                return ResponseMessage(new HttpResponseMessage(HttpStatusCode.Forbidden));
            if (!Repository.Instance.CarExists(id))
                return NotFound();

            var car = Repository.Instance.TaxiServiceRepository.Cars.Find(id);

            car.Registration = request.Data.Registration;
            car.Year = request.Data.Year;
            car.Type = request.Data.CarType;
            Repository.Instance.TaxiServiceRepository.SaveChanges();

            return Ok();
        }

        [HttpPost]
        [Route("api/cars/remove")]
        public IHttpActionResult Delete([FromBody]ApiRequest<int?> request)
        {
            if (!Repository.Instance.LoggedInUsers.TryGetValue(request.UserHash, out User user))
                return Unauthorized();
            if (user.Role != UserRole.Dispatcher)
                return ResponseMessage(new HttpResponseMessage(HttpStatusCode.Forbidden));
            if (!Repository.Instance.CarExists((int)request.Data))
                return NotFound();

            var car = Repository.Instance.TaxiServiceRepository.Cars.Find((int)request.Data);
            if(car.Driver != null)
                return BadRequest("Only driverless cars can be removed");
            Repository.Instance.TaxiServiceRepository.Cars.Remove(car);
            Repository.Instance.TaxiServiceRepository.SaveChanges();
            return Ok();
        }
    }
}
