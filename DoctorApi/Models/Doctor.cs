using System.ComponentModel.DataAnnotations;

namespace DoctorApi.Models
{
    public class Doctor
    {
        public int id { get; set; }
        public string? nombre { get; set; }
        public string? especialidad { get; set; }
        public string? correo { get; set; }
        public string? telefono { get; set; }
    }
}
