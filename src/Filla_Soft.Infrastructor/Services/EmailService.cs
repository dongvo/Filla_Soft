using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Filla_Soft.Infrastructure.Services
{
    public interface IEmailSender
    {
        Task SendEmailAsync(string email, string subject, string message);
    }

    public class EmailService: IEmailSender
    {
        public Task SendEmailAsync(string email, string subject, string message)
        {
            // Plug in your email service here to send an email.
            return Task.FromResult(0);
        }
    }
}
