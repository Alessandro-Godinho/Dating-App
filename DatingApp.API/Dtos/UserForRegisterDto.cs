using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }
       [Required]
       [StringLength(8, MinimumLength = 4, ErrorMessage = "Por favor insira uma senha de no mínimo 4 digitos")]
        public string Password { get; set; }
    }
}