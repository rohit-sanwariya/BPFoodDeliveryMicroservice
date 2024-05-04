using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BPFoodDeliveryMicroservice.Services.CouponAPI.Migrations
{
    /// <inheritdoc />
    public partial class seedData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Coupons",
                columns: new[] { "Id", "Code", "Discount", "LastUpdated", "MinAmount" },
                values: new object[,]
                {
                    { 1, "Coupon100001", 20.0, new DateTime(2024, 4, 27, 14, 4, 7, 425, DateTimeKind.Local).AddTicks(7125), 80 },
                    { 2, "Coupon100002", 10.0, new DateTime(2024, 4, 27, 14, 4, 7, 425, DateTimeKind.Local).AddTicks(7179), 800 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Coupons",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Coupons",
                keyColumn: "Id",
                keyValue: 2);
        }
    }
}
