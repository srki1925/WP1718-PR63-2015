using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace DataModel
{
    public enum Sex { Male, Female}
    public enum UserRole { Guest, Customer, Driver, Dispatcher }
    public class User
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public string Lastname { get; set; }
        public Sex Sex { get; set; }
        public string JMBG { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public bool Blocked { get; set; }
        public UserRole Role { get; set; }
        public List<Ride> Rides { get; set; }
    }
}