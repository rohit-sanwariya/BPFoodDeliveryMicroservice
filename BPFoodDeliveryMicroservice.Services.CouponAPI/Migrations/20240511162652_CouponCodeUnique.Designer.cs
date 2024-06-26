﻿// <auto-generated />
using System;
using BPFoodDeliveryMicroservice.Services.CouponAPI.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace BPFoodDeliveryMicroservice.Services.CouponAPI.Migrations
{
    [DbContext(typeof(ApplicationDBContext))]
    [Migration("20240511162652_CouponCodeUnique")]
    partial class CouponCodeUnique
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.4")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("BPFoodDeliveryMicroservice.Services.CouponAPI.Models.Coupon", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Code")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("Discount")
                        .HasColumnType("float");

                    b.Property<DateTime>("LastUpdated")
                        .HasColumnType("datetime2");

                    b.Property<int>("MinAmount")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Coupons");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Code = "Coupon100001",
                            Discount = 20.0,
                            LastUpdated = new DateTime(2024, 5, 11, 21, 56, 51, 96, DateTimeKind.Local).AddTicks(1984),
                            MinAmount = 80
                        },
                        new
                        {
                            Id = 2,
                            Code = "Coupon100002",
                            Discount = 10.0,
                            LastUpdated = new DateTime(2024, 5, 11, 21, 56, 51, 96, DateTimeKind.Local).AddTicks(2040),
                            MinAmount = 800
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
