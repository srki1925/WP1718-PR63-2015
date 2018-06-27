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
        public CarType CarType { get; set; }
        public string Customer { get; set; }
        public string Driver { get; set; }
        public string Dispatcher { get; set; }
        public LocationResponse Location { get; set; }
        public LocationResponse Destination { get; set; }
        public CommentResponse Comment { get; set; }
        public string Time { get; set; }
        public decimal Fare { get; set; }

        public static RideResponse Convert(Ride source)
        {
            if (source == null)
                return null;
            return new RideResponse()
            {
                Id = source.Id,
                CarType = source.CarType,
                Comment = source.Comment == null ? null : new CommentResponse() {
                    description = source.Comment.Description,
                    rating = (int)source.Comment.Rate,
                    time = source.Comment.PublishDate.ToString()
                },
                Customer = source.Customer?.Username,
                Dispatcher = source.Dispatcher?.Username,
                Driver = source.Driver?.Username,
                Location = source.CustomerLocation == null ? null : new LocationResponse()
                {
                    lat = source.CustomerLocation.Latitude,
                    lng = source.CustomerLocation.Longitude,
                    address = source.CustomerLocation.Address
                },
                Destination = source.Destination == null ? null : new LocationResponse()
                {
                    lat = source.Destination.Latitude,
                    lng = source.Destination.Longitude,
                    address = source.Destination.Address
                },
                Status = source.Status,
                Time = source.OrderTime.ToString(),
                Fare = source.Fare
            };
        }
    }
}