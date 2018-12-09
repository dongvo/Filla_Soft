using System;
using System.Collections.Generic;
using System.Text;

namespace Filla_Soft.Core.ViewModels
{
    public class AccountViewModel
    {
        public int Id { get; set; }

        public string Email { get; set; }

        public DateTime CreatedDate { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

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

        public string Role { get; set; }
    }
}
