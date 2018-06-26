using DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TaxiService.Models
{
    public class UserFullData
    {
        public string username { get; set; }
        public string name { get; set; }
        public string lastname { get; set; }
        public Sex sex { get; set; }
        public string jmbg { get; set; }
        public string phone { get; set; }
        public string email { get; set; }
        public int? carId { get; set; }
    }
}