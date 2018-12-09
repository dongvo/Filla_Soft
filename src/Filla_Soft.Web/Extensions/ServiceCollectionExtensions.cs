using Filla_Soft.Infrastructor;
using Filla_Soft.Infrastructure.Services;
using Filla_Soft.Web.Filters;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Razor;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Filla_Soft.Core.Entities;
using Microsoft.AspNetCore.Identity;
using Filla_Soft.Infrastructor.Providers;
using Filla_Soft.Providers.Options;
using Filla_Soft.Infrastructor.Services;
using Filla_Soft.Infrastructor.Repositories.Abstract;
using Filla_Soft.Infrastructor.Repositories;

namespace Filla_Soft.Web.Extensions
{
    public static class ServiceCollectionExtensions
    {
        /// <summary>
        /// name of provider for token
        /// </summary>
        private const string _forgotPasswordEmailTokenProviderName = "ForgotPasswordEmail";

        public static IServiceCollection AddCustomizedMvc(this IServiceCollection services)
        {
            services.AddMvc(options =>
            {
                options.Filters.Add(typeof(ModelValidationFilter));
            })
            .AddJsonOptions(options =>
            {
                options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
            })
            .AddViewLocalization(LanguageViewLocationExpanderFormat.Suffix)
            .AddDataAnnotationsLocalization()
            .SetCompatibilityVersion(CompatibilityVersion.Version_2_1);

            services.Configure<ApiBehaviorOptions>(options =>
            {
                options.SuppressConsumesConstraintForFormFileParameters = true;
                options.SuppressInferBindingSourcesForParameters = true;
                options.SuppressModelStateInvalidFilter = true;
            });
            return services;
        }

        public static IServiceCollection AddCustomIdentity(this IServiceCollection services)
        {
            //start: config for custom provider
            //set token provider for ForgotPasswordEmail
            services.Configure<IdentityOptions>(options =>
            {
                options.Tokens.PasswordResetTokenProvider = _forgotPasswordEmailTokenProviderName;
            });
            //set time span for token expireation time
            services.Configure<ForgotPasswordEmailDataProtectorTokenProviderOptions>(options =>
            {
                //default is 1 day
                options.TokenLifespan = TimeSpan.FromDays(1);
            });

            //end: config for custom provider

            services.AddIdentity<ApplicationUser, ApplicationRole>(options =>
            {
                // options for user and password can be set here
                // options.Password.RequiredLength = 4;
                // options.Password.RequireNonAlphanumeric = false;
                options.Password.RequiredLength = 8;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireDigit = true;
                options.Password.RequireLowercase = false;
                options.Password.RequireUppercase = false;

                //lockout settins
                //options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(10);
                //options.Lockout.MaxFailedAccessAttempts = 5;
                //options.Lockout.AllowedForNewUsers = true;
            })
            .AddEntityFrameworkStores<AccountDbContext>()
            .AddDefaultTokenProviders()
            .AddTokenProvider<ForgotPasswordEmailDataProtectorTokenProvider<ApplicationUser>>(_forgotPasswordEmailTokenProviderName); //add provider for reset password expired


            
            //services.AddAuthentication().AddFacebook(facebookOptions =>
            //{
            //    facebookOptions.AppId = Startup.Configuration["Authentication:Facebook:AppId"];
            //    facebookOptions.AppSecret = Startup.Configuration["Authentication:Facebook:AppSecret"];
            //});

            return services;
        }

        public static IServiceCollection AddCustomDbContext(this IServiceCollection services)
        {
            // Add framework services.
            services.AddDbContextPool<AccountDbContext>(options =>
            {
                var connection = Startup.Configuration["ConnectionStrings:AccountConnectionString"];
                options.UseSqlServer(connection);
                options.UseSqlServer(connection, b => b.MigrationsAssembly("Filla_Soft.Web"));
            });
            return services;
        }

        public static IServiceCollection AddCustomLocalization(this IServiceCollection services)
        {
            return services;
        }


        public static IServiceCollection RegisterCustomServices(this IServiceCollection services)
        {
            services.AddTransient<IEmailSender, EmailService>();
            services.AddTransient<IDatabaseInitializer, DatabaseInitializer>();
            services.AddTransient<AccountDbContext>();
            services.AddTransient<UserResolverService>();
            services.AddTransient<IProjectRepository, ProjectRepository>();
            services.AddTransient<ProjectService>();
            services.AddScoped<ApiExceptionFilter>();

            return services;
        }

    }
}
