using DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TaxiService.Models
{
    public class RideRequest
    {
        public Location Location { get; set; }
        public int? CustomerId { get; set; }
        //in case dispatcher created ride
        public int? DriverId { get; set; }
        public CarType CarType { get; set; }
        public int? RideId { get; set; }
        public decimal? Fare { get; set; }
    }
}