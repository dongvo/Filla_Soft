using Filla_Soft.Core.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Filla_Soft.Infrastructor.Repositories.Abstract
{
    public interface IProjectRepository
    {
        bool AddProject(string name, string description);

        List<Project> GetAssignedProject(int accountId, bool isAdmin);

        List<ProjectOverview> GetAllProject();

        ProjectDetails GetProjectDetail(int id);

        bool AddProjectMember(int pId, int uId);

        bool RemoveProjectMember(int pId, int uId);
    }
}
