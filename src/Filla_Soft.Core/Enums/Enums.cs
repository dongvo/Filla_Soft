using System;
using System.Collections.Generic;
using System.Text;

namespace Filla_Soft.Core
{
    class Enums
    {
    }

    public enum Gender
    {
        Male = 1,
        FeMale = 2,
        None = 0
    }

    public sealed class Roles
    {
        private Roles() { }

        public static readonly string Admin = "Admin";
        public static readonly string User = "User";
    }
    
}
