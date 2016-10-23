using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace AngularAuth.ViewModels.Authorization {
    public class LogoutViewModel {
        [BindNever]
        public string RequestId { get; set; }
    }
}
