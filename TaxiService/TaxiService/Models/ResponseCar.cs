using DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TaxiService.Models
{
    public class ResponseCar
    {
        public string Driver { get; set; }
        public ushort Year { get; set; }
        public string Registration { get; set; }
        public int CarNumber { get; set; }
        public CarType CarType { get; set; }
    }
}