using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TaxiService.Models
{
    public class LocationResponse
    {
        public double? lat { get; set; }
        public double? lng { get; set; }
        public string address { get; set; }
    }
}