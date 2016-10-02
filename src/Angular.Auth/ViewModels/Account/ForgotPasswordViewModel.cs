using System.ComponentModel.DataAnnotations;

namespace AngularAuth.ViewModels.Account {
    public class ForgotPasswordViewModel {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}
