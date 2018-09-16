using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;

namespace Filla_Soft.Infrastructor.Repositories
{
    public class DapperBaseRepository
    {
        private string _accountConnectionString;
        private string _issueConnectionString;
        private string _projectConnectionString;

        public DapperBaseRepository(IConfiguration configuration)
        {
            _accountConnectionString = configuration.GetConnectionString("AccountConnectionString");
            _issueConnectionString = configuration.GetConnectionString("IssueConnectionString");
            _projectConnectionString = configuration.GetConnectionString("ProjectConnectionString");
        }

        internal IDbConnection AccountConnection
        {
            get
            {
                return new SqlConnection(_accountConnectionString);
            }
        }

        internal IDbConnection IssueConnection
        {
            get
            {
                return new SqlConnection(_issueConnectionString);
            }
        }

        internal IDbConnection ProjectConnection
        {
            get
            {
                return new SqlConnection(_projectConnectionString);
            }
        }
    }
}
