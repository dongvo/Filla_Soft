using System;
using System.Collections.Generic;
using System.Text;

namespace Filla_Soft.Core.Entities
{
    public class UserModel
    {
        public string Email { get; set; }
        
        public DateTime CreatedDate { get; set; }
        
        public string FirstName { get; set; }
        
        public string LastName { get; set; }
        
        public DateTime LastUpdate { get; set; }

        public int Gender { get; set; }
        
        public string GenderName
        {
            get
            {
                return Enum.GetName(typeof(Gender), this.Gender > 2 ? 0 : this.Gender);
            }
        }
        
        public string Name
        {
            get
            {
                return this.FirstName + " " + this.LastName;
            }

        }
    }
}
