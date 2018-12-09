using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Filla_Soft.Core.Entities;
using Filla_Soft.Core.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Filla_Soft.Web.Controllers.api
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "Admin")]
    public class ManageAccountController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _userManager;

        public ManageAccountController(
            UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
        }

        [HttpGet("All")]
        public async Task<IActionResult> GetAccounts()
        {
            List<AccountViewModel> lstUser = new List<AccountViewModel>();

            foreach (var user in _userManager.Users.ToList())
            {
                lstUser.Add(new AccountViewModel
                {
                    Id = user.Id,
                    Email = user.Email,
                    FirstName = user.FirstName,
                    LastName = user.LastName,
                    Gender = user.Gender,
                    CreatedDate = user.CreatedDate,
                    Role = _userManager.GetRolesAsync(user).ToString()
                });
            }

            return AppUtil.Success(lstUser);
        }
    }
}