using BPFoodDeliveryMicroservice.Services.Web.DTOs;
using BPFoodDeliveryMicroservice.Web.Services.IServices;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Text.Json;

namespace BPFoodDeliveryMicroservice.Web.Controllers;

public class CouponController : Controller
{
    private readonly ICouponService _service;
    public CouponController(ICouponService service)
    {
        _service = service;
    }
    public async  Task<IActionResult> CouponIndex()
    {
        ResponseDTO? coupons = await _service.GetAllAsync();
        List<CouponDTO>? list = [];
        if(coupons != null && coupons.IsSuccess)
        {
            list = JsonConvert.DeserializeObject<List<CouponDTO>>(Convert.ToString(coupons.Result));
        }
        
       
        return View(list);
    }
}
