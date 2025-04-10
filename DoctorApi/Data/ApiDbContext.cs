using DoctorApi.Models;
using Microsoft.EntityFrameworkCore;

namespace DoctorApi.Data
{
    public class ApiDbContext : DbContext
    {
        public ApiDbContext(DbContextOptions<ApiDbContext> options) : base(options)
        {
        }

        public DbSet<Doctor> Doctores { get; set; }
    }
}