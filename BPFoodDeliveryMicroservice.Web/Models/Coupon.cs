using System.ComponentModel.DataAnnotations;

namespace BPFoodDeliveryMicroservice.Services.Web.Models;

public class Coupon
{
    [Key]
    public int Id { get; set; }
    [Required]
    public required string Code { get; set; }
    [Required]
    public double Discount { get; set; }
    public int MinAmount { get; set; }

    public DateTime LastUpdated { get; set; }

}
