using DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TaxiService.Models
{
    public class RideResponse
    {
        public int Id { get; set; }
        public RideStatus Status  { get; set; }
        public Location CustomerLocation { get; set; }
        public Location Destination { get; set; }
        public CarType CarType { get; set; }
        public int CustomerId { get; set; }
        public int CommentId { get; set; }
        public string OrderTime { get; set; }

        public static RideResponse Convert(Ride source)
        {
            return new RideResponse()
            {
                Id = source.Id,
                CarType = source.CarType,
                CommentId = (int)source.CommentId,
                CustomerId = (int)source.CustomerId,
                CustomerLocation = source.CustomerLocation,
                Destination = source.Destination,
                Status = source.Status,
                OrderTime = source.OrderTime.ToString()
            };
        }
    }
}