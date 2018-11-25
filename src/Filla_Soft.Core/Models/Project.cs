using System;
using System.Collections.Generic;
using System.Text;

namespace Filla_Soft.Core.Models
{
    public class Project
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool IsDeleted { get; set; }
    }

    public class ProjectOverview: Project
    {
        public int NumberOfMember { get; set; }
    }

    public class ProjectAccount
    {
        public int id { get; set; }
        
        public string FirstName { get; set; }
        
        public string LastName { get; set; }

        public string Email { get; set; }
    }

    public class ProjectDetails
    {
        public Project Project { get; set; }

        public List<ProjectAccount> ProjectAccounts { get; set; }
    }
}
