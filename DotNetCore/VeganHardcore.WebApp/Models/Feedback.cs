using System.ComponentModel.DataAnnotations;

namespace VeganHardcore.WebApp.Models
{
    public class Feedback
    {
        [Required]
        public string Author { get; set; }

        [Required]
        [MinLength(3)]
        public string Text { get; set; }

        [Required]
        public Score Score { get; set; }
    }
}
