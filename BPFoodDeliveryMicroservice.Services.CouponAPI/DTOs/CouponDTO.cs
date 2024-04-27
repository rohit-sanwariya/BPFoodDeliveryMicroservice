namespace BPFoodDeliveryMicroservice.Services.CouponAPI.DTOs;

public class CouponDTO
{
    public int Id { get; set; }
    public required string Code { get; set; }
    public double Discount { get; set; }
    public int MinAmount { get; set; }

}
