using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Filla_Soft.Core.ViewModels.ManageProjectViewModels
{
    public class MemberProjectUpdateViewModel
    {
        [Required]
        public int Project { get; set; }

        [Required]
        public int Member { get; set; }
    }
}
