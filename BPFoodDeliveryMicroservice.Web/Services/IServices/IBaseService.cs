using BPFoodDeliveryMicroservice.Services.Web.DTOs;
using BPFoodDeliveryMicroservice.Web.DTOs;

namespace BPFoodDeliveryMicroservice.Web.Services.IServices;

public interface IBaseService
{
   Task<ResponseDTO> SendAsync(RequestDto requestDto);
}
