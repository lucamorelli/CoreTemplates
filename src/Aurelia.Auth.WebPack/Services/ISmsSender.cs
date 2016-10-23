using System.Threading.Tasks;

namespace AureliaAuth.Services {
    public interface ISmsSender {
        Task SendSmsAsync(string number, string message);
    }
}
