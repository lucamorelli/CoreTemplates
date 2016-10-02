using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularAuth.ViewModels.Register
{
    public class JwtRegisterViewModel
    {
        public string userId { get; set; }
        public string password { get; set; }
        public string repeatPassword { get; set; }

    }
}
