using BPFoodDeliveryMicroservice.Web.Enums;

namespace BPFoodDeliveryMicroservice.Web.DTOs;

public class RequestDto
{
    public ApiType ApiType { get; set; } = ApiType.GET;
    public required string URL { get; set; }
    public object?  Payload { get; set; }

    public required string AccessToken { get; set; }
}
