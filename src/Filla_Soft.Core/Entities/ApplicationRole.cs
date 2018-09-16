using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace Filla_Soft.Core.Entities
{
    public class ApplicationRole: IdentityRole<int>
    {
        [StringLength(250)]
        public string Description { get; set; }
    }
}
