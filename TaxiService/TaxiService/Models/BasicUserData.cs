using DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TaxiService.Models
{
    public class BasicUserData
    {
        public string username { get; set; }
        public string email { get; set; }
        public UserRole type { get; set; }
        public string phone { get; set; }
        public bool blocked { get; set; }
    }
}