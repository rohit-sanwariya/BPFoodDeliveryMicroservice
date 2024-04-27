namespace BPFoodDeliveryMicroservice.Services.CouponAPI.Models;

public class Coupon
{
    public int Id { get; set; }
    public required string Code { get; set; }
    public double Discount { get; set; }
    public int MinAmount { get; set; }

    public DateTime LastUpdated { get; set; }

}
