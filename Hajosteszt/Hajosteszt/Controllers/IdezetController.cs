using Hajosteszt.IdezetModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Hajosteszt.Controllers
{
    [Route("api/idezetek")]
    [ApiController]
    public class IdezetController : ControllerBase
    {
        // GET: api/idezetek
        [HttpGet]
        public IEnumerable<Ax085x> Get()
        {
            SzamhaloContext context = new SzamhaloContext();
            return context.Ax085xes.ToList();
        }

        // GET api/idezetek/5
        [HttpGet("{id}")]
        public Ax085x Get(int id)
        {
            SzamhaloContext context = new SzamhaloContext();
            var keresettIdezet = (from x in context.Ax085xes
                                  where x.IdezetSk == id
                                  select x).FirstOrDefault();
            return keresettIdezet;
        }

        // POST api/idezetek
        [HttpPost]
        public void Post([FromBody] Ax085x újIdézet)
        {
            SzamhaloContext context = new SzamhaloContext();
            context.Ax085xes.Add(újIdézet);
            context.SaveChanges();
        }

        // Get api/<IdezetController>/5
        [HttpGet("db")]
        [Route("api/idezetek/db")]
        public int idezetSzam()
        {
            SzamhaloContext context = new SzamhaloContext();
            int idezetSzam = context.Ax085xes.Count();
            return idezetSzam;
        }

        // DELETE api/idezetek/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            SzamhaloContext context = new SzamhaloContext();
            var törlendőIdézet = (from x in context.Ax085xes
                                  where x.IdezetSk == id
                                  select x).FirstOrDefault();
            context.Remove(törlendőIdézet);
            context.SaveChanges();
        }
    }
}
