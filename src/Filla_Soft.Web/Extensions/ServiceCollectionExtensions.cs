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

namespace Filla_Soft.Web.Extensions
{
    public static class ServiceCollectionExtensions
    {
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
            return services;
        }

        public static IServiceCollection AddCustomIdentity(this IServiceCollection services)
        {
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
            })
            .AddEntityFrameworkStores<AccountDbContext>()
            .AddDefaultTokenProviders();

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
                var connection = Startup.Configuration["Connections:AccountConnectionString"];
                options.UseSqlServer(connection);
                options.UseSqlServer(connection, b => b.MigrationsAssembly("Filla_Soft.Web"));
                //options.UseOpenIddict();
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
            services.AddScoped<ApiExceptionFilter>();

            return services;
        }

    }
}
