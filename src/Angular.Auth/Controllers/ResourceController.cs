using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using AspNet.Security.OAuth.Validation;

namespace AngularAuth.Controllers {
    [Route("api")]
    public class ResourceController : Controller {
        [Authorize(ActiveAuthenticationSchemes = OAuthValidationDefaults.AuthenticationScheme)]
        [HttpGet("message")]
        public IActionResult GetMessage() {
            var identity = User.Identity as ClaimsIdentity;
            if (identity == null) {
                return BadRequest();
            }

            return Content($"{identity.Name} has been successfully authenticated.");
        }
    }
}