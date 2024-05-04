namespace BPFoodDeliveryMicroservice.Services.Web.DTOs
{
    public class ResponseDTO
    {
        public object Result { get; set; }
        public string Message { get; set; }
        public bool IsSuccess { get; set; }
        public ResponseDTO()
        {
            
        }
    }
}
