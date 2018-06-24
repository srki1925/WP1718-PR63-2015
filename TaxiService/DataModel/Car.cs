using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DataModel
{
    public enum CarType { Sedan, Van, Undefined}
    public class Car
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int CarNumber { get; set; }
        public int? DriverId { get; set; }
        public Driver Driver { get; set; }
        public ushort Year { get; set; }
        public string Registration { get; set; }
        public CarType Type { get; set; }
    }
}