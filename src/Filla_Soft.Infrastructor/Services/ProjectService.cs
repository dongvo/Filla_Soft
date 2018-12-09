﻿using Filla_Soft.Core.Models;
using Filla_Soft.Infrastructor.Repositories.Abstract;
using System;
using System.Collections.Generic;
using System.Text;

namespace Filla_Soft.Infrastructor.Services
{
    public class ProjectService
    {
        private readonly IProjectRepository _projectRepository;

        public ProjectService(IProjectRepository projectRepository)
        {
            _projectRepository = projectRepository;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="name"></param>
        /// <param name="description"></param>
        /// <returns></returns>
        public bool AddProject(string name, string description)
        {
            return _projectRepository.AddProject(name, description);
        }

        public List<Project> GetAssignedProject(int accountId, bool isAdmin)
        {
            return _projectRepository.GetAssignedProject(accountId, isAdmin);
        }

        public List<ProjectOverview> GetALlProject()
        {
            return _projectRepository.GetAllProject();
        }

        public ProjectDetails GetProjectDetails(int id)
        {
            return _projectRepository.GetProjectDetail(id);
        }

        public bool AddProjectMember(int pId, int uId)
        {
            return _projectRepository.AddProjectMember(pId, uId);
        }

        public bool RemoveProjectMember(int pId, int uId)
        {
            return _projectRepository.RemoveProjectMember(pId, uId);
        }
    }
}
