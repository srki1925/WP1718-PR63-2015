﻿using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataModel;

namespace DAL
{
    public class TaxiServiceContext : DbContext
    {
        public TaxiServiceContext(string nameOrConnectionString) : base(nameOrConnectionString)
        {
        }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Driver>().HasOptional(x => x.Car).WithMany().HasForeignKey(x => x.CarId);
            modelBuilder.Entity<Car>().HasOptional(x => x.Driver).WithMany().HasForeignKey(x => x.DriverId);
            modelBuilder.Entity<Ride>().HasOptional(x => x.Comment).WithMany().HasForeignKey(x => x.CommentId);
            modelBuilder.Entity<Ride>().HasOptional(x => x.CustomerLocation).WithMany().HasForeignKey(x => x.CustomerLocationId);
            modelBuilder.Entity<Comment>().HasOptional(x => x.Ride).WithMany().HasForeignKey(x => x.RideId);
        }
        public IQueryable<Ride> GetAllRides()
        {
            return (from r in Rides.Include("CustomerLocation").Include("Destination").Include("Comment")
                    select r);
        }
        public DbSet<User> Users { get; set; }
        public DbSet<Car> Cars { get; set; }
        public DbSet<Driver> Drivers { get; set; }
        public DbSet<Ride> Rides { get; set; }
        public DbSet<Location> Locations { get; set; }
        public DbSet<Comment> Comments { get; set; }
    }
}
