using Microsoft.AspNetCore.Identity;

namespace BPFoodDeliveryMicroservice.AuthAPI.Models;

public class ApplicationUser : IdentityUser
{
    public int Name { get; set; }
}
