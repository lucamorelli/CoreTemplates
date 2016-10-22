using System;
using OpenIddict;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace AngularAuth.Models {
    // Add profile data for application users by adding properties to the ApplicationUser class
    public class ApplicationUser : IdentityUser<Guid> { }
}
