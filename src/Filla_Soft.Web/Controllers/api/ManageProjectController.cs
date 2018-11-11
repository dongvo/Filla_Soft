using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Filla_Soft.Core.ViewModels.ManageProjectViewModels;
using Filla_Soft.Infrastructor.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Filla_Soft.Web.Controllers.api
{
    [Route("api/[controller]")]
    [ApiController]
    public class ManageProjectController : ControllerBase
    {
        private readonly ProjectService _projectService;

        public ManageProjectController(
            ProjectService projectService)
        {
            _projectService = projectService;
        }

        [HttpPost("AddNewProject")]
        public IActionResult AddProject([FromBody] NewProjectViewModel model)
        {
            _projectService.AddProject(model.Name, model.Description);

            return Ok(new
            {

            });
        }
    }
}