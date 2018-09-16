using Filla_Soft.Core.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Filla_Soft.Infrastructor
{
    public interface IDatabaseInitializer
    {
        Task SeedAsync(IConfiguration configuration);
    }
    public class DatabaseInitializer: IDatabaseInitializer
    {
        private readonly AccountDbContext _context;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<ApplicationRole> _roleManager;
        //private readonly OpenIddictApplicationManager<OpenIddictApplication> _openIddictApplicationManager;
        private readonly ILogger _logger;

        public DatabaseInitializer(
            AccountDbContext context,
            ILogger<DatabaseInitializer> logger,
            RoleManager<ApplicationRole> roleManager,
            UserManager<ApplicationUser> userManager
            )
        {
            _context = context;
            _logger = logger;
            _roleManager = roleManager;
            _userManager = userManager;
        }


        public async Task SeedAsync(IConfiguration configuration)
        {
            await _context.Database.MigrateAsync().ConfigureAwait(false);

            CreateRoles();
            CreateUsers();
        }

        private void CreateUsers()
        {
            if (!_context.ApplicationUsers.Any())
            {
                var adminUser = new ApplicationUser { UserName = "admin@admin.com", FirstName = "Admin first", LastName = "Admin last", Email = "admin@admin.com", PhoneNumber = "0123456789", EmailConfirmed = true }; //, IsEnabled = true };
                _userManager.CreateAsync(adminUser, "P@ssw0rd!").Result.ToString();
                //_userManager.AddClaimAsync(adminUser, new Claim(OpenIdConnectConstants.Claims.PhoneNumber, adminUser.Mobile.ToString(), ClaimValueTypes.Integer)).Result.ToString();
                _userManager.AddToRoleAsync(_userManager.FindByNameAsync("admin@admin.com").GetAwaiter().GetResult(), "Admin").Result.ToString();

                //var normalUser = new ApplicationUser { UserName = "user@user.com", FirstName = "First", LastName = "Last", Email = "user@user.com", PhoneNumber = "0123456789", EmailConfirmed = true };//, IsEnabled = true };
                //_userManager.CreateAsync(normalUser, "P@ssw0rd!").Result.ToString();
                ////_userManager.AddClaimAsync(adminUser, new Claim(OpenIdConnectConstants.Claims.PhoneNumber, adminUser.Mobile.ToString(), ClaimValueTypes.Integer)).Result.ToString();
                //_userManager.AddToRoleAsync(_userManager.FindByNameAsync("user@user.com").GetAwaiter().GetResult(), "User").Result.ToString();
            }
        }

        private void CreateRoles()
        {
            var rolesToAdd = new List<ApplicationRole>(){
                new ApplicationRole { Name= "Admin", Description = "Full rights role"},
                new ApplicationRole { Name= "User", Description = "Limited rights role"}
            };
            foreach (var role in rolesToAdd)
            {
                if (!_roleManager.RoleExistsAsync(role.Name).Result)
                {
                    _roleManager.CreateAsync(role).Result.ToString();
                }
            }
        }
    }
}
