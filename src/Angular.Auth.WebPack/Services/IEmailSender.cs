using System.Threading.Tasks;

namespace AngularAuth.Services {
    public interface IEmailSender {
        Task SendEmailAsync(string email, string subject, string message);
    }
}
