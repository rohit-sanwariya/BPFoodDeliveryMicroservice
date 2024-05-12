using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace BPFoodDeliveryMicroservice.Services.CouponAPI.Models;
[Index(nameof(Code),IsUnique = true)]
public class Coupon
{
    [Key]
    public int Id { get; set; }
    [Required]

    public required string Code { get; set; }
    [Required]
    public double Discount { get; set; }
    public int MinAmount { get; set; }

    public DateTime LastUpdated { get; set; } = DateTime.UtcNow;

}
