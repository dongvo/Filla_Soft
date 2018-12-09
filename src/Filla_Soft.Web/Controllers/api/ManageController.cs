using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Filla_Soft.Core.Entities;
using Filla_Soft.Core.ViewModels;
using Filla_Soft.Infrastructure.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace Filla_Soft.Web.Controllers.api
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "Admin")]
    public class ManageController : ControllerBase
    {
        private readonly IOptions<IdentityOptions> _identityOptions;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly IEmailSender _emailSender;
        private readonly ILogger _logger;
        private IHostingEnvironment _env;
        private readonly RoleManager<ApplicationRole> _roleManager;

        public ManageController(
            UserManager<ApplicationUser> userManager,
            IOptions<IdentityOptions> identityOptions,
            SignInManager<ApplicationUser> signInManager,
            IEmailSender emailSender,
            ILoggerFactory loggerFactory,
            IHostingEnvironment env,
            RoleManager<ApplicationRole> roleManager)
        {
            _userManager = userManager;
            _identityOptions = identityOptions;
            _signInManager = signInManager;
            _emailSender = emailSender;
            _logger = loggerFactory.CreateLogger<AccountController>();
            _env = env;
            _roleManager = roleManager;
        }


        [HttpGet("accounts")]
        public async Task<IActionResult> GetAllAccount()
        {
            var currUser = await GetCurrentUserAsync();

            List<AccountViewModel> lstUser = new List<AccountViewModel>();
            foreach (var user in _userManager.Users.ToList())
            {
                if(user.Id != currUser.Id)
                    lstUser.Add(new AccountViewModel
                    {
                        Id = user.Id,
                        Email = user.Email,
                        FirstName = user.FirstName,
                        LastName = user.LastName,
                        Gender = user.Gender,
                        CreatedDate = user.CreatedDate,
                        Role = _userManager.GetRolesAsync(user).Result.FirstOrDefault()
                    });
            }

            return AppUtil.Success(lstUser.OrderBy(l => l.CreatedDate));

        }

        #region Helpers
        private Task<ApplicationUser> GetCurrentUserAsync()
        {
            return _userManager.GetUserAsync(HttpContext.User);
        }

        #endregion

    }
}