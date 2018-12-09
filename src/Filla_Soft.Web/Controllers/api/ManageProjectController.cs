using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Filla_Soft.Core.Entities;
using Filla_Soft.Core.Models;
using Filla_Soft.Core.ViewModels;
using Filla_Soft.Core.ViewModels.ManageProjectViewModels;
using Filla_Soft.Infrastructor.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Filla_Soft.Web.Controllers.api
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "Admin")]
    public class ManageProjectController : ControllerBase
    {
        private readonly ProjectService _projectService;
        private readonly UserManager<ApplicationUser> _userManager;

        public ManageProjectController(
            ProjectService projectService,
            UserManager<ApplicationUser> userManager)
        {
            _projectService = projectService;
            _userManager = userManager;
        }

        [HttpPost("AddNewProject")]
        public IActionResult AddProject([FromBody] NewProjectViewModel model)
        {
            _projectService.AddProject(model.Name, model.Description);

            return Ok(new
            {

            });
        }

        [HttpGet("GetAllProject")]
        public IActionResult GetAllProject()
        {
            List<ProjectOverview> result = _projectService.GetALlProject();

            return AppUtil.Success(new
            {
                projects = result
            });
        }

        [HttpGet("GetProjectDetails")]
        public async Task<IActionResult> GetProjectDetails(int id)
        {
            var result = _projectService.GetProjectDetails(id);

            var currUser = await GetCurrentUserAsync();
            List<AccountViewModel> lstUser = new List<AccountViewModel>();
            foreach (var user in _userManager.Users.ToList())
            {
                if (user.Id != currUser.Id)
                    lstUser.Add(new AccountViewModel
                    {
                        Id = user.Id,
                        Email = user.Email,
                        FirstName = user.FirstName,
                        LastName = user.LastName,
                        Gender = user.Gender,
                        CreatedDate = user.CreatedDate,
                        Role = _userManager.GetRolesAsync(user).Result.FirstOrDefault()
                    });
            }

            return AppUtil.Success( new {
                Details = result,
                ListUser = lstUser });
        }

        [HttpPost("AddMember")]
        public async Task<IActionResult> AddMemberAsync([FromBody]MemberProjectUpdateViewModel model)
        {
            var currUser = await GetCurrentUserAsync();
            List<ProjectOverview> lstProject = _projectService.GetALlProject();
            if (lstProject.FindIndex(p => p.Id == model.Project) < 0)
                return AppUtil.Failure("Not found project");
            if(currUser.Id == model.Member || _userManager.Users.ToList().FindIndex(u => u.Id == model.Member) < 0)
                return AppUtil.Failure("Not found member");
            bool result = _projectService.AddProjectMember(model.Project, model.Member);
            if (result)
                return AppUtil.Success(null);
            return AppUtil.Failure(null);
        }

        [HttpPost("RemoveMember")]
        public async Task<IActionResult> RemoveMemberAsync([FromBody]MemberProjectUpdateViewModel model)
        {
            var currUser = await GetCurrentUserAsync();
            List<ProjectOverview> lstProject = _projectService.GetALlProject();
            if (lstProject.FindIndex(p => p.Id == model.Project) < 0)
                return AppUtil.Failure("Not found project");
            if (currUser.Id == model.Member || _userManager.Users.ToList().FindIndex(u => u.Id == model.Member) < 0)
                return AppUtil.Failure("Not found member");
            bool result = _projectService.RemoveProjectMember(model.Project, model.Member);
            if (result)
                return AppUtil.Success(null);
            return AppUtil.Failure(null);
        }

        #region Helpers
        private Task<ApplicationUser> GetCurrentUserAsync()
        {
            return _userManager.GetUserAsync(HttpContext.User);
        }


        #endregion
    }
}