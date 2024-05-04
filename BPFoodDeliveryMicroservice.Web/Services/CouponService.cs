using BPFoodDeliveryMicroservice.Services.Web.DTOs;
using BPFoodDeliveryMicroservice.Web.DTOs;
using BPFoodDeliveryMicroservice.Web.Enums;
using BPFoodDeliveryMicroservice.Web.Services.IServices;
using BPFoodDeliveryMicroservice.Web.Utility;

namespace BPFoodDeliveryMicroservice.Web.Services;

public class CouponService : ICouponService

{
    private readonly IBaseService _service;

    public CouponService(IBaseService service)
    {
        _service = service;
    }
    public async Task<ResponseDTO?> CreateAsync(CouponDTO coupon)
    {
        return await _service.SendAsync(

          new RequestDto()
          {
              ApiType = ApiType.POST,
              URL = SD.CouponAPIBase + "/api/Coupon/",
              AccessToken = "",
              Payload = coupon
          }
          );
    }

    public async Task<ResponseDTO?> DeleteAsync(int id)
    {
        return await _service.SendAsync(

          new RequestDto()
          {
              ApiType = ApiType.DELETE,
              URL = SD.CouponAPIBase + "/api/Coupon/" + id,
              AccessToken = ""
          }
          );
    }

    public async Task<ResponseDTO?> GetAllAsync()
    {
        return await _service.SendAsync(

            new RequestDto()
            {
                ApiType = ApiType.GET,
                URL = SD.CouponAPIBase + "/api/Coupon/all",
                AccessToken = ""
            }
            );
    }

    public async Task<ResponseDTO?> GetByCodeAsync(string code)
    {
        return await _service.SendAsync(

           new RequestDto()
           {
               ApiType = ApiType.GET,
               URL = SD.CouponAPIBase + "/api/Coupon/code/" + code,
               AccessToken = ""
           }
           );
    }

    public async Task<ResponseDTO?> GetByIdAsync(int id)
    {
        return await _service.SendAsync(

          new RequestDto()
          {
              ApiType = ApiType.GET,
              URL = SD.CouponAPIBase + "/api/Coupon/" + id,
              AccessToken = ""
          }
          );
    }

    public async Task<ResponseDTO?> UpdateAsync(CouponDTO coupon)
    {
        return await _service.SendAsync(

        new RequestDto()
        {
            ApiType = ApiType.PUT,
            URL = SD.CouponAPIBase + "/api/Coupon/",
            AccessToken = "",
            Payload = coupon
        }
        );
    }
}
