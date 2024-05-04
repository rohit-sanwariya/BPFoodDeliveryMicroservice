using BPFoodDeliveryMicroservice.Services.Web.DTOs;

namespace BPFoodDeliveryMicroservice.Web.Services.IServices
{
    public interface ICouponService 
    {
        Task<ResponseDTO?> GetAllAsync();
        Task<ResponseDTO?> GetByCodeAsync(string code);
        Task<ResponseDTO?> GetByIdAsync(int id);
        Task<ResponseDTO?> DeleteAsync(int id);
        Task<ResponseDTO?> CreateAsync(CouponDTO coupon);
        Task<ResponseDTO?> UpdateAsync(CouponDTO coupon);
         
    }
}
