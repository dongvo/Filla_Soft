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
}
