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
            _projectRepository.AddProject(name, description);
            return true;
        }

    }
}
