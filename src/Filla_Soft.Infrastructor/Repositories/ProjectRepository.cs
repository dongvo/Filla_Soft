using Filla_Soft.Infrastructor.Repositories.Abstract;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;
using Dapper;
using Filla_Soft.Core.Models;

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
                dbConnection.Execute("spProjectInsert", new
                {
                    Name = name,
                    Description = description
                }, commandType: CommandType.StoredProcedure);
            }
            return true;
        }

        public List<Project> GetAssignedProject(int accountId, bool isAdmin)
        {
            List<Project> result;

            using(IDbConnection dbConnection = ProjectConnection)
            {
                var reader = dbConnection.Query<Project>("spProjectSelectAssigned", new
                {
                    AccountId = accountId,
                    IsAdmin = isAdmin
                }, commandType: CommandType.StoredProcedure);
                result = new List<Project>(reader);
            }

            return result;
        }

        public List<ProjectOverview> GetAllProject()
        {
            List<ProjectOverview> result;

            using (IDbConnection dbConnection = ProjectConnection)
            {
                var reader = dbConnection.Query<ProjectOverview>("spProjectSelectAll", commandType: CommandType.StoredProcedure);
                result = new List<ProjectOverview>(reader);
            }

            return result;
        }
    }
}
