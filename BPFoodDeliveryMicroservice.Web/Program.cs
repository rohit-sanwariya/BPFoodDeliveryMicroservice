using BPFoodDeliveryMicroservice.Web.Services;
using BPFoodDeliveryMicroservice.Web.Services.IServices;
using BPFoodDeliveryMicroservice.Web.Utility;

namespace BPFoodDeliveryMicroservice.Web
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            SD.CouponAPIBase = builder.Configuration["ServiceUrls:CouponAPI"];

            builder.Services.AddHttpClient();
            builder.Services.AddHttpClient<IBaseService,BaseService>();
            builder.Services.AddScoped<IBaseService,BaseService>();
            builder.Services.AddScoped<ICouponService,CouponService>();
            // Add services to the container.
            builder.Services.AddControllersWithViews();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (!app.Environment.IsDevelopment())
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.MapControllerRoute(
                name: "default",
                pattern: "{controller=Home}/{action=Index}/{id?}");

            app.Run();
        }
    }
}
