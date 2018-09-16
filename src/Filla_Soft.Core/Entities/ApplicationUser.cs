using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace Filla_Soft.Core.Entities
{
    public class ApplicationUser : IdentityUser<int>
    {
        [DataType(DataType.DateTime)]
        public DateTime CreatedDate { get; set; }

        [StringLength(100)]
        public string FirstName { get; set; }

        [StringLength(100)]
        public string LastName { get; set; }

        [DataType(DataType.DateTime)]
        public DateTime BirthDay { get; set; }

        [DataType(DataType.DateTime)]
        public DateTime LastUpdate { get; set; }

        public int Gender { get; set; }

        [NotMapped]
        public string GenderName
        {
            get
            {
                return Enum.GetName(typeof(Gender), this.Gender > 2 ? 0 : this.Gender);
            }
        }

        [NotMapped]
        public string Name
        {
            get
            {
                return this.FirstName + " " + this.LastName;
            }

        }
    }
}
