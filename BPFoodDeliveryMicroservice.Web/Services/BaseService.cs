using BPFoodDeliveryMicroservice.Services.Web.DTOs;
using BPFoodDeliveryMicroservice.Web.DTOs;
using BPFoodDeliveryMicroservice.Web.Enums;
using BPFoodDeliveryMicroservice.Web.Services.IServices;
using Newtonsoft.Json;

namespace BPFoodDeliveryMicroservice.Web.Services
{
    public class BaseService  : IBaseService
    {
        private readonly IHttpClientFactory _httpClienttFactory;

        public BaseService(IHttpClientFactory httpClientFactory)
        {
            _httpClienttFactory = httpClientFactory;
        }
        public async Task<ResponseDTO> SendAsync(RequestDto requestDto)
        {
            HttpClient client = _httpClienttFactory.CreateClient();
            HttpRequestMessage message = new();
            message.Headers.Add("Accept", "application/json");
            message.RequestUri = new Uri(requestDto.URL);

            if(requestDto.Payload != null)
            {
                message.Content = new StringContent(JsonConvert.SerializeObject(requestDto.Payload));
            }
            HttpResponseMessage? apiresponse = null;
            message.Method = ResoveMethod(requestDto.ApiType);
            apiresponse = await client.SendAsync(message);
            if(apiresponse.IsSuccessStatusCode)
            {
                var content = await apiresponse.Content.ReadAsStringAsync();
                var res = JsonConvert.DeserializeObject<ResponseDTO>(content);

                return res;
            }
            else
            {
                return new ResponseDTO { IsSuccess = false, Message = "Failed", Result = null };
            }
        }

        public HttpMethod ResoveMethod(ApiType id)
        {
            HttpMethod  method  = HttpMethod.Get;
            switch (id)
            {
                case ApiType.POST:
                    method = HttpMethod.Post;
                    break;                
                case ApiType.PUT:
                    method  = HttpMethod.Put;
                    break;   
                case ApiType.DELETE:
                    method = HttpMethod.Delete;
                    break;

            }
            return method;
        }

       
    }
}
