using DoctorApi.Data; //llamamos a la carpeta Data para instanciar la clase apiDbContext
using DoctorApi.Models; //llamamos a la carpeta Models para instanciar la clase Doctores
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
        public async Task<ActionResult<IEnumerable<Doctor>>> GetDoctor()
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
        public async Task<ActionResult<Doctor>> Post([FromBody] Doctor doctor)
        {
            _context.Doctores.Add(doctor); //Prepara los datos para almacenarlos a la tabla
            await _context.SaveChangesAsync(); //lo almacena ya en la BD

            return Ok(doctor); //regresa on 200 y el valor de los datos

        }

        // PUT api/<DoctoresController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Doctor doctor)
        {
            if (id != doctor.id) //deben de coincidir los Id tanto del body como de la URL
                return BadRequest("El ID del doctor no coincide.");

            _context.Entry(doctor).State = EntityState.Modified;


            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.Doctores.Any(a => a.id == id))
                    return NotFound();
                else
                    throw;
            }

            return Ok();//no regresa un objeto
        }


        // DELETE api/<DoctoresController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var doctor = await _context.Doctores.FindAsync(id); //busca el Id del registro
            if (doctor == null)
                return NotFound();

            _context.Doctores.Remove(doctor); //prepara el borrado en BD
            await _context.SaveChangesAsync(); //confirma la transaccion

            return NoContent();
        }
    }
}
