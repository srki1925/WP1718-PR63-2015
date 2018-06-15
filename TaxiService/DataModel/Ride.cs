using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DataModel
{
    public class Ride
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public enum RideStatus { Ordered, Processed, Waiting, Accepted, Cancelled, Succesful, Unsuccessful}
        public DateTime OrderTime { get; set; }
        public Location CustomerLocation{ get; set; }
        public CarType CarType { get; set; }
        public Location Destination { get; set; }
        public int? CustomerId { get; set; }
        public User Customer { get; set; }
        public int? DispatcherId { get; set; }
        public User Dispatcher { get; set; }
        public int? DriverId { get; set; }
        public Driver Driver { get; set; }
        public decimal Fare { get; set; }
        public int? CommentId { get; set; }
        public Comment Comment { get; set; }
        public RideStatus Status { get; set; }
    }
}