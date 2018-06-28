using DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TaxiService.Models
{
    public class DriverResponse
    {
        public string username { get; set; }
        public CarType cartype { get; set; }
        public LocationResponse location { get; set; }
        public bool Free { get; set; }
    }
}