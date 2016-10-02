using System.ComponentModel.DataAnnotations;

namespace AngularAuth.ViewModels.Manage {
    public class VerifyPhoneNumberViewModel {
        [Required]
        public string Code { get; set; }

        [Required]
        [Phone]
        [Display(Name = "Phone number")]
        public string PhoneNumber { get; set; }
    }
}
