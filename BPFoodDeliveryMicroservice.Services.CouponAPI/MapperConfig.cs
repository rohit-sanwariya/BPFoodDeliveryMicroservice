using AutoMapper;
using BPFoodDeliveryMicroservice.Services.CouponAPI.DTOs;
using BPFoodDeliveryMicroservice.Services.CouponAPI.Models;

namespace BPFoodDeliveryMicroservice.Services.CouponAPI
{
    public class MapperConfig :Profile
    {
        public MapperConfig()
        {
            CreateMap<Coupon, CouponDTO>();
            CreateMap<CouponDTO, Coupon>();
            CreateMap<Coupon, CouponCreateDTO>();
            CreateMap<CouponCreateDTO, Coupon>();

        }
    }
}
