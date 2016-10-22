using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using AspNet.Security.OAuth.Validation;
using Microsoft.AspNetCore.Identity;
using AureliaAuth.Models;
using System.Threading.Tasks;

namespace AureliaAuth.Controllers {
    [Route("api")]
    public class ResourceController : Controller {

        private readonly UserManager<ApplicationUser> _userManager;

        public ResourceController(UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
        }

        [Authorize(ActiveAuthenticationSchemes = OAuthValidationDefaults.AuthenticationScheme)]
        [HttpGet("message")]
        public async Task<IActionResult> GetMessage() {
            var user = await _userManager.GetUserAsync(User);
            if (user == null)
            {
                return BadRequest();
            }

            return Content($"{user.UserName} has been successfully authenticated.");
        }
    }
}