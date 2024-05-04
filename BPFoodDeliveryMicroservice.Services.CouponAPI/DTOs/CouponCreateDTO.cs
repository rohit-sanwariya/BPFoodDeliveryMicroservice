﻿namespace BPFoodDeliveryMicroservice.Services.CouponAPI.DTOs
{
    public class CouponCreateDTO
    {
        public required string Code { get; set; }
        public double Discount { get; set; }
        public int MinAmount { get; set; }
    }
}
