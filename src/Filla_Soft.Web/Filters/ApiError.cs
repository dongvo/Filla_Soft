using Microsoft.AspNetCore.Mvc.ModelBinding;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Filla_Soft.Web.Extensions;

namespace Filla_Soft.Web.Filters
{
    public class ApiError
    {
        public string Message { get; set; }
        public bool isError { get; set; }
        public string detail { get; set; }
        public List<ValidationError> Errors { get; set; }

        public ApiError(string message)
        {
            this.Message = message;
            isError = true;
        }

        public ApiError(ModelStateDictionary modelState)
        {
            this.isError = true;
            Message = "Validation Failed";
            Errors = modelState.Keys
                    .SelectMany(key => modelState[key].Errors.Select(x => new ValidationError(key, x.ErrorMessage)))
                    .ToList();
        }
    }

    public class ApiSuccess
    {
        public string Message { get; set; }
        public bool Success { get; set; }

        public ApiSuccess(string message)
        {
            this.Message = message;
            this.Success = true;
        }
    }
}
