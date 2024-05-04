using BPFoodDeliveryMicroservice.Services.CouponAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace BPFoodDeliveryMicroservice.Services.CouponAPI.Data;

public class ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) : DbContext(options)
{
    public DbSet<Coupon> Coupons { get; set; }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.Entity<Coupon>().HasData(new Coupon { 
        Code = "Coupon100001",
        Discount= 20,
        Id = 1,
        LastUpdated = DateTime.Now,
        MinAmount = 80,
        });   
        modelBuilder.Entity<Coupon>().HasData(new Coupon { 
        Code = "Coupon100002",
        Discount= 10,
        Id = 2,
        LastUpdated = DateTime.Now,
        MinAmount = 800,
        });
    }
}
