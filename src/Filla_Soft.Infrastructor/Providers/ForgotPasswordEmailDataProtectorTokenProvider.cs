using Filla_Soft.Providers.Options;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;

namespace Filla_Soft.Infrastructor.Providers
{
    public class ForgotPasswordEmailDataProtectorTokenProvider<TUser> : DataProtectorTokenProvider<TUser> where TUser : class
    {
        public ForgotPasswordEmailDataProtectorTokenProvider(IDataProtectionProvider dataProtectionProvider, IOptions<ForgotPasswordEmailDataProtectorTokenProviderOptions> options) : base(dataProtectionProvider, options)
        {
        }
    }
}