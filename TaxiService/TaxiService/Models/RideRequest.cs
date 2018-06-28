using DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TaxiService.Models
{
    public class RideRequest
    {
        public LocationResponse Location { get; set; }
        public LocationResponse Destination { get; set; }
        //in case dispatcher created ride
        public string Driver { get; set; }
        public CarType CarType { get; set; }
        public int? RideId { get; set; }
        public decimal? Fare { get; set; }
    }
}