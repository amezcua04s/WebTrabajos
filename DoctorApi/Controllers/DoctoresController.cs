using DoctorApi.Data; //llamamos a la carpeta Data para instanciar la clase apiDbContext
using DoctorApi.Models; //llamamos a la carpeta Models para instanciar la clase Alumnos
using Microsoft.AspNetCore.Mvc; //llamamos a la libreria de ASP.NET Core para crear el controlador y sus funcionalidades
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DoctorApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctoresController : ControllerBase
    {

        private readonly ApiDbContext _context;

        public  DoctoresController(ApiDbContext context)
        {
            _context = context;
        }

        // GET: api/<DoctoresController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Doctor>>> GetAlumnos()
        {
            return await _context.Doctores.ToListAsync();
        }

        // GET api/<DoctoresController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Doctor>> GetDoctor(int id)
        {
            var doctor = await _context.Doctores.FindAsync(id);
            if (doctor == null) return NotFound();
            return doctor;
        }

        // POST api/<DoctoresController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<DoctoresController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<DoctoresController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
