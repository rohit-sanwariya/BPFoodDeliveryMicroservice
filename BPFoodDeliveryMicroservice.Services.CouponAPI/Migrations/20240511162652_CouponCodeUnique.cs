using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BPFoodDeliveryMicroservice.Services.CouponAPI.Migrations
{
    /// <inheritdoc />
    public partial class CouponCodeUnique : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Coupons",
                keyColumn: "Id",
                keyValue: 1,
                column: "LastUpdated",
                value: new DateTime(2024, 5, 11, 21, 56, 51, 96, DateTimeKind.Local).AddTicks(1984));

            migrationBuilder.UpdateData(
                table: "Coupons",
                keyColumn: "Id",
                keyValue: 2,
                column: "LastUpdated",
                value: new DateTime(2024, 5, 11, 21, 56, 51, 96, DateTimeKind.Local).AddTicks(2040));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Coupons",
                keyColumn: "Id",
                keyValue: 1,
                column: "LastUpdated",
                value: new DateTime(2024, 4, 27, 14, 4, 7, 425, DateTimeKind.Local).AddTicks(7125));

            migrationBuilder.UpdateData(
                table: "Coupons",
                keyColumn: "Id",
                keyValue: 2,
                column: "LastUpdated",
                value: new DateTime(2024, 4, 27, 14, 4, 7, 425, DateTimeKind.Local).AddTicks(7179));
        }
    }
}
