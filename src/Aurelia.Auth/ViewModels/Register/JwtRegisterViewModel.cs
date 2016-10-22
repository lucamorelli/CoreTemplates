using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AureliaAuth.ViewModels.Register
{
    public class JwtRegisterViewModel
    {
        public string email { get; set; }
        public string userName { get; set; }
        public string password { get; set; }
        public string scope { get; set; }

    }
}
