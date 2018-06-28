using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TaxiService.Models
{
    public class CommentResponse
    {
        public string description { get; set; }
        public string time { get; set; }
        public int? rating { get; set; }
        public int? rideId { get; set; }
    }
}