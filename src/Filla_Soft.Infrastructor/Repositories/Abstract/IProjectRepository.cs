using System;
using System.Collections.Generic;
using System.Text;

namespace Filla_Soft.Infrastructor.Repositories.Abstract
{
    public interface IProjectRepository
    {
        bool AddProject(string name, string description);
    }
}
