using Filla_Soft.Core.Entities;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace Filla_Soft.Web.Controllers.api
{
    public class AppUtil
    {
        internal static IActionResult SignIn(ApplicationUser user, IList<string> roles)
        {
            var userResult = new
            {
                IsLoggedIn = true,
                User = new
                {
                    Id = user.Id,
                    FullName = user.Name,
                    Email = user.Email,
                    BirthDay = user.BirthDay,
                    Gender = user.Gender,
                    GenderName = user.GenderName,
                    Roles = roles
                }
            };
            //var userResult = new { User = new { DisplayName = user.UserName, Roles = roles } };
            return new ObjectResult(userResult);
        }

        internal static IActionResult Result(bool success, object result, string message)
        {
            return new OkObjectResult(new
            {
                Success = success,
                Message = message,
                Result = result
            });
        }

        internal static IActionResult Result(bool success, object result)
        {
            return Result(success, result, string.Empty);
        }


        internal static IActionResult Success(object result, string message)
        {
            return Result(true, result, message);
        }

        internal static IActionResult Success(string message)
        {
            return Result(true, null, message);
        }

        internal static IActionResult Success(object result)
        {
            return Result(true, result);
        }

        internal static IActionResult Failure(object result, string message)
        {
            return Result(false, result, message);
        }

        internal static IActionResult Failure(string message)
        {
            return Result(false, null, message);
        }

        internal static IActionResult Failure(object result)
        {
            return Result(false, result);
        }

    }
}
