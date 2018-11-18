using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Filla_Soft.Core.Entities;
using Filla_Soft.Core.Helpers;
using Filla_Soft.Core.ViewModels.AccountViewModels;
using Filla_Soft.Infrastructor.Services;
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
    [Authorize]
    public class AccountController : ControllerBase
    {
        private readonly IOptions<IdentityOptions> _identityOptions;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly IEmailSender _emailSender;
        private readonly ILogger _logger;
        private IHostingEnvironment _env;
        private readonly RoleManager<ApplicationRole> _roleManager;
        private readonly ProjectService _projectService;

        public AccountController(
            UserManager<ApplicationUser> userManager,
            IOptions<IdentityOptions> identityOptions,
            SignInManager<ApplicationUser> signInManager,
            IEmailSender emailSender,
            ILoggerFactory loggerFactory,
            IHostingEnvironment env,
            RoleManager<ApplicationRole> roleManager,
            ProjectService projectService)
        {
            _userManager = userManager;
            _identityOptions = identityOptions;
            _signInManager = signInManager;
            _emailSender = emailSender;
            _logger = loggerFactory.CreateLogger<AccountController>();
            _env = env;
            _roleManager = roleManager;
            _projectService = projectService;
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
                    var projects = _projectService.GetAssignedProject(user.Id, User.IsInRole(Filla_Soft.Core.Roles.Admin));
                    return AppUtil.SignIn(user, roles, new { Projects = projects});
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

        [HttpPost("logout")]
        public async Task<IActionResult> Logout()
        {
            bool isLogin = this.HttpContext.User.Identity.IsAuthenticated;
            if (isLogin)
            {
                await _signInManager.SignOutAsync();
                return Ok(new ApiSuccess(ResultLabels.LOGOUT_SUCCESSFULLY));
            }
            return BadRequest(new ApiError(ErrorState.EMAIL_NOT_REGISTER));
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
                var projects = _projectService.GetAssignedProject(user.Id, User.IsInRole(Filla_Soft.Core.Roles.Admin));
                //get role user in project
                return AppUtil.SignIn(user, roles, new { Projects = projects });
            }

            return Ok(new { IsLoggedIn = isLogin });
        }

        [HttpPost("ForgotPassword")]
        [AllowAnonymous]
        public async Task<IActionResult> ForgotPassword([FromBody]ForgotPasswordViewModel model)
        {
            var currentUser = await _userManager.FindByNameAsync(model.Email);
            if (currentUser == null || !(await _userManager.IsEmailConfirmedAsync(currentUser)))
            {
                // Don't reveal that the user does not exist or is not confirmed
                return NoContent();
            }
            // For more information on how to enable account confirmation and password reset please visit https://go.microsoft.com/fwlink/?LinkID=532713
            // Send an email with this link
            var code = await _userManager.GeneratePasswordResetTokenAsync(currentUser);

            var host = Request.Scheme + "://" + Request.Host;
            var callbackUrl = host + "?userId=" + currentUser.Id + "&passwordResetCode=" + code;
            var confirmationLink = "<a class='btn-primary' href=\"" + callbackUrl + "\">Reset your password</a>";
            await _emailSender.SendEmailAsync(model.Email, "Forgotten password email", confirmationLink);
            return NoContent(); // sends 204
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