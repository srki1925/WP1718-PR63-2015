using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using DAL;
using DataModel;

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
        }
    }
}
