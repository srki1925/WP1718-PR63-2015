using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using DAL;
using DataModel;
using TaxiService.Models;

namespace TaxiService
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            Repository.Instance.TaxiServiceRepository.Users.DefaultIfEmpty(null);
            //mapper validation testing
            /*var user = new User() { Role = Role.Customer };
            var disp = new User() { Role = Role.Dispatcher };
            var driver = new Driver();
            var car = new Car();
            var ride = new Ride();
            ride.OrderTime = DateTime.Now;
            Repository.Instance.TaxiServiceRepository.Users.Add(user);
            Repository.Instance.TaxiServiceRepository.Users.Add(disp);
            Repository.Instance.TaxiServiceRepository.Drivers.Add(driver);
            Repository.Instance.TaxiServiceRepository.Cars.Add(car);
            Repository.Instance.TaxiServiceRepository.Rides.Add(ride);
            Repository.Instance.TaxiServiceRepository.SaveChanges();*/
            ReadDispatchers();
            InitCars();
            InitDrivers();
            InitCustomers();
            foreach (var item in Repository.Instance.TaxiServiceRepository.Users.ToList())
            {
                var hash = AuthorizationService.ComputeSha512(item.Username + item.Password);
                Repository.Instance.LoggedInUsers[hash] = item;
                Console.WriteLine(hash);
            }
        }

        private void ReadDispatchers()
        {
            var fileLocation = ConfigurationManager.AppSettings["dispatchersInitData"];
            var lines = File.ReadAllLines(fileLocation);
            foreach (var item in lines)
            {
                if (!item.StartsWith("//"))
                {
                    var parameters = item.Replace(" ","").Replace("/t","").Split(',');
                    var user = new User()
                    {
                        Username = parameters[0],
                        Password = parameters[1],
                        Name = parameters[2],
                        Lastname = parameters[3],
                        Sex = parameters[4] == "male" ? Sex.Male : Sex.Female,
                        JMBG = parameters[5],
                        Email = parameters[6],
                        Role = UserRole.Dispatcher
                    };
                    if (!Repository.Instance.UserExists(user.Username)){
                        Repository.Instance.TaxiServiceRepository.Users.Add(user);
                        Repository.Instance.TaxiServiceRepository.SaveChanges();
                    }
                }
            }
        }

        private void InitDrivers()
        {
            var fileLocation = ConfigurationManager.AppSettings["driversInitData"];
            var lines = File.ReadAllLines(fileLocation);
            foreach (var item in lines)
            {
                if (!item.StartsWith("//"))
                {
                    var parameters = item.Replace(" ", "").Replace("/t", "").Split(',');
                    var driver = new Driver()
                    {
                        Username = parameters[0],
                        Password = parameters[1],
                        Name = parameters[2],
                        Lastname = parameters[3],
                        Sex = parameters[4] == "male" ? Sex.Male : Sex.Female,
                        JMBG = parameters[5],
                        Email = parameters[6],
                        Role = UserRole.Driver,
                        Car = Repository.Instance.TaxiServiceRepository.Cars.FirstOrDefault(x => x.DriverId == null)
                    };
                    if (Repository.Instance.TaxiServiceRepository.Drivers.FirstOrDefault(x => x.Username == driver.Username) == null)
                    {
                        Repository.Instance.TaxiServiceRepository.Drivers.Add(driver);
                        Repository.Instance.TaxiServiceRepository.Cars.FirstOrDefault(x => x.CarNumber == driver.Car.CarNumber).Driver = driver;
                        Repository.Instance.TaxiServiceRepository.SaveChanges();
                    }
                }
            }
        }
        private void InitCustomers()
        {
            var fileLocation = ConfigurationManager.AppSettings["customersInitData"];
            var lines = File.ReadAllLines(fileLocation);
            foreach (var item in lines)
            {
                if (!item.StartsWith("//"))
                {
                    var parameters = item.Replace(" ", "").Replace("/t", "").Split(',');
                    var user = new User()
                    {
                        Username = parameters[0],
                        Password = parameters[1],
                        Name = parameters[2],
                        Lastname = parameters[3],
                        Sex = parameters[4] == "male" ? Sex.Male : Sex.Female,
                        JMBG = parameters[5],
                        Email = parameters[6],
                        Role = UserRole.Customer
                    };
                    if (!Repository.Instance.UserExists(user.Username))
                    {
                        Repository.Instance.TaxiServiceRepository.Users.Add(user);
                        Repository.Instance.TaxiServiceRepository.SaveChanges();
                    }
                }
            }
        }
        private void InitCars()
        {
            var fileLocation = ConfigurationManager.AppSettings["carsInitData"];
            var lines = File.ReadAllLines(fileLocation);
            foreach (var item in lines)
            {
                if (!item.StartsWith("//"))
                {
                    var parameters = item.Replace(" ", "").Replace("/t", "").Split(',');
                    var car = new Car()
                    {
                        Year = ushort.Parse(parameters[0]),
                        Registration = parameters[1],
                        Type = parameters[2] == "sedan" ? CarType.Sedan : CarType.Van,
                    };

                    if(Repository.Instance.TaxiServiceRepository.Cars.FirstOrDefault(x => x.Registration == car.Registration) == null)
                    {
                        Repository.Instance.TaxiServiceRepository.Cars.Add(car);
                        Repository.Instance.TaxiServiceRepository.SaveChanges();
                    }
                }
            }
        }
    }
}
