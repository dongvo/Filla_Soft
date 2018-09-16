using Filla_Soft.Core.Entities;
using Filla_Soft.Infrastructure.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Filla_Soft.Infrastructor
{
    public class AccountDbContext: IdentityDbContext<ApplicationUser, ApplicationRole, int>
    {
        private readonly UserResolverService _userService;

        public int CurrentUserId { get; internal set; }
        public DbSet<ApplicationUser> ApplicationUsers { get; set; }
        public DbSet<ApplicationRole> ApplicationRoles { get; set; }

        public AccountDbContext(DbContextOptions<AccountDbContext> options, UserResolverService userService) : base(options)
        {
            _userService = userService;
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<ApplicationUser>().ToTable("AppUsers");
            modelBuilder.Entity<ApplicationRole>().ToTable("AppRoles");
            modelBuilder.Entity<IdentityUserLogin<int>>().ToTable("AppUserLogins");
            modelBuilder.Entity<IdentityUserClaim<int>>().ToTable("AppUserClaims");
            modelBuilder.Entity<IdentityUserToken<int>>().ToTable("AppUserTokens");
            modelBuilder.Entity<IdentityRoleClaim<int>>().ToTable("AppRoleClaims");
            modelBuilder.Entity<IdentityUserRole<int>>().ToTable("AppUserRoles");
        }
    }
}
