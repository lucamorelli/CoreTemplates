using System.Threading.Tasks;

namespace AngularAuth.Services {
    public interface ISmsSender {
        Task SendSmsAsync(string number, string message);
    }
}
