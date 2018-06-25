using DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TaxiService.Models
{
    public class NewUser
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public string Lastname { get; set; }
        public string Jmbg { get; set; }
        public string Phone { get; set; }
        public int? CarNumber { get; set; }
        public UserRole UserType { get; set; }
        public Sex Sex { get; set; }
    }
}