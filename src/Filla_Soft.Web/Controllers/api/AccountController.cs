using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Filla_Soft.Core.Entities;
using Filla_Soft.Core.Helpers;
using Filla_Soft.Core.ViewmModels.AccountViewModels;
using Filla_Soft.Infrastructure.Services;
using Filla_Soft.Web.Filters;
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
    public class AccountController : ControllerBase
    {
        private readonly IOptions<IdentityOptions> _identityOptions;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly IEmailSender _emailSender;
        private readonly ILogger _logger;
        private IHostingEnvironment _env;
        private readonly RoleManager<ApplicationRole> _roleManager;

        public AccountController(
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

        [HttpPost("login")]
        [AllowAnonymous]
        public async Task<IActionResult> Login([FromBody]LoginViewModel model)
        {
            //check email registed
            var user = await _userManager.FindByEmailAsync(model.Email);
            if (user == null)
            {
                return BadRequest(new ApiError(ErrorState.EMAIL_NOT_REGISTER));
            }
            else
            {
                var result = await _signInManager.PasswordSignInAsync(model.Email, model.Password, true, false);
                if (result.Succeeded)
                {
                    var roles = await _userManager.GetRolesAsync(user);
                    return AppUtil.SignIn(user, roles);
                }
                else
                {
                    if (!user.EmailConfirmed)
                    {
                        return BadRequest(new ApiError(ErrorState.USER_IS_NOT_CONFIRM));
                    }
                    return BadRequest(new ApiError(ErrorState.PASSWORD_WRONG));
                }
            }
        }


        [HttpGet("checkloggedin")]
        [AllowAnonymous]
        public async Task<IActionResult> CheckLogin()
        {
            bool isLogin = this.HttpContext.User.Identity.IsAuthenticated;
            if (isLogin)
            {
                var user = await GetCurrentUserAsync();
                var roles = await _userManager.GetRolesAsync(user);

                //get role user in project
                return AppUtil.SignIn(user, roles);
            }

            return Ok(new { IsLoggedIn = isLogin });
        }

        #region Helpers

        private void AddErrors(IdentityResult result)
        {
            foreach (var error in result.Errors)
            {
                ModelState.AddModelError(string.Empty, error.Description);
            }
        }

        private Task<ApplicationUser> GetCurrentUserAsync()
        {
            return _userManager.GetUserAsync(HttpContext.User);
        }

        #endregion
    }
}