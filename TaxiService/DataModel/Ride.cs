using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DataModel
{
    //ordered - dispatcher has created ride - no use just to satisfy project conditions
    //processed - dispatcher has created or processed customers order
    //waiting - customer has ordered a ride
    //accepted - driver has accepted order
    //cancelled - customer has canciled order before acceptance
    //succesful - order was successfully fulfiled
    //Failed - driver has cancelled the order
    public enum RideStatus { Ordered, Processed, Waiting, Accepted, Cancelled, Succesful, Failed}
    public class Ride
    {
        public Ride()
        {

        }
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public DateTime OrderTime { get; set; }
        public Location CustomerLocation{ get; set; }
        public CarType CarType { get; set; }
        public Location Destination { get; set; }
        [ForeignKey("Customer")]
        public int? CustomerId { get; set; }
        public User Customer { get; set; }
        [ForeignKey("Dispatcher")]
        public int? DispatcherId { get; set; }
        public User Dispatcher { get; set; }
        [ForeignKey("Driver")]
        public int? DriverId { get; set; }
        public Driver Driver { get; set; }
        public decimal Fare { get; set; }
        public int? CommentId { get; set; }
        public Comment Comment { get; set; }
        public RideStatus Status { get; set; }
    }
}