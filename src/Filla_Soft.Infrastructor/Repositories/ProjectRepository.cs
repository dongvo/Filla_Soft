using Filla_Soft.Infrastructor.Repositories.Abstract;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;
using Dapper;

namespace Filla_Soft.Infrastructor.Repositories
{
    public class ProjectRepository : DapperBaseRepository, IProjectRepository
    {
        public ProjectRepository(IConfiguration configuration) : base(configuration)
        {
        }

        public bool AddProject(string name, string description)
        {
            using (IDbConnection dbConnection = ProjectConnection)
            {
                var reader = dbConnection.Execute("spProjectInsert", new
                {
                    Name = name,
                    Description = description
                }, commandType: CommandType.StoredProcedure);
            }
            return true;
        }

    }
}
