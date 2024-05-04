using AutoMapper;
using Azure;
using BPFoodDeliveryMicroservice.Services.CouponAPI.Data;
using BPFoodDeliveryMicroservice.Services.CouponAPI.DTOs;
using BPFoodDeliveryMicroservice.Services.CouponAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using static Azure.Core.HttpHeader;

namespace BPFoodDeliveryMicroservice.Services.CouponAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CouponController : ControllerBase
    {
        private readonly ApplicationDBContext _db;
        private readonly IMapper _mapper;
        private ResponseDTO<CouponDTO> ResponseItem = new();
        private ResponseDTO<CouponCreateDTO> ResponseCreateItem = new();
        private ResponseDTO<IEnumerable<CouponDTO>> ResponseList = new();
        public CouponController(ApplicationDBContext db,IMapper mapper)
        {
            _db = db;
            _mapper = mapper;
        }

        [HttpGet("all")]
        public ActionResult<ResponseDTO<IEnumerable<CouponDTO>>> GetAll()
        {
            try
            {
                IEnumerable<Coupon> coupons = _db.Coupons.ToList();
                IEnumerable<CouponDTO> dtos = _mapper.Map<IEnumerable<CouponDTO>>(coupons);
                ResponseList.Result = dtos;
                ResponseList.IsSuccess = true;
                return Ok(ResponseList);
            }
            catch (Exception)
            {
                ResponseList.Result = null;
                ResponseList.IsSuccess = false;
                return NotFound(ResponseList);
            }
        }


        [HttpGet("code/{code}")]
        public ActionResult<ResponseDTO<CouponDTO>> GetByCouponCode(string code)
        {
            
            try {
                Coupon? coupon = _db.Coupons.FirstOrDefault(c => c.Code == code);
                CouponDTO dto = _mapper.Map<CouponDTO>(coupon);
                ResponseItem.Result = dto;
                ResponseItem.IsSuccess = true;
                return ResponseItem;
            }
            catch (Exception) {
                ResponseItem.Result = null;
                ResponseItem.IsSuccess = true;
                return NotFound(ResponseItem);
            }
        }


        [HttpGet("{id:int}")]
        public ActionResult<ResponseDTO<CouponDTO>> GetById(int id)
        {
            try
            {
                Coupon? coupons = _db.Coupons.FirstOrDefault(c =>c.Id == id);
                CouponDTO dto = _mapper.Map<CouponDTO>(coupons);
                ResponseItem.Result = dto;
                ResponseItem.IsSuccess = true;
                return Ok(ResponseItem);
            }
            catch(Exception ex)
            {
               ResponseItem.IsSuccess= false;
                ResponseItem.Result = null;
                return NotFound(ResponseItem);
            }
        }

        [HttpPost]
        public ActionResult<ResponseDTO<CouponCreateDTO>> CreateCoupon([FromBody] CouponCreateDTO coupon)
        {
            try {
                Coupon coup = _mapper.Map<Coupon>(coupon);
                var some = _db.Coupons.Add(coup);
                _db.SaveChanges();
                ResponseCreateItem.Result = coupon;
                ResponseCreateItem.IsSuccess = true;
                return Ok(ResponseCreateItem);
            }
            catch (Exception) {
                ResponseCreateItem.Result = coupon;
                ResponseCreateItem.IsSuccess = true;
                return StatusCode(500,ResponseCreateItem);
            }
        }        
        [HttpPut]
        public ActionResult<ResponseDTO<CouponCreateDTO>> UpdateCoupon([FromBody] CouponCreateDTO coupon)
        {
            try {
                Coupon coup = _mapper.Map<Coupon>(coupon);
                var some = _db.Coupons.Update(coup);
                _db.SaveChanges();
                ResponseCreateItem.Result = coupon;
                ResponseCreateItem.IsSuccess = true;
                return Ok(ResponseCreateItem);
            }
            catch (Exception) {
                ResponseCreateItem.Result = coupon;
                ResponseCreateItem.IsSuccess = true;
                return StatusCode(500,ResponseCreateItem);
            }
        }        
        [HttpDelete]
        public ActionResult<ResponseDTO<CouponCreateDTO>> DeleteCoupon(int id)
        {
            try {
                Coupon coup = _db.Coupons.FirstOrDefault(c => c.Id == id);
                _db.Coupons.Remove(coup);
                _db.SaveChanges();
                ResponseCreateItem.Result = null;
                ResponseCreateItem.IsSuccess = true;
                return Ok();
            }
            catch (Exception) {
                ResponseCreateItem.Result = null;
                ResponseCreateItem.IsSuccess = true;
                return StatusCode(500,ResponseCreateItem);
            }
        }
    }
}
