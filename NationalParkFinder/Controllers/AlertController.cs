using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NationalParkFinder.Models;

namespace NationalParkFinder.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlertController : ControllerBase
    {
        [HttpGet("getAlerts")]
        public List<Datum1> GetAlerts(string _park) 
        {
           List<Class1> result = AlertDAL.GetAlert(_park).Property1.ToList();
           List<Datum1> result1=new List<Datum1>();
            foreach (Class1  a in result) 
            { 
              foreach(Datum1[] b in a.data)
                {
                    foreach (Datum1 c in b)
                    {
                        result1.Add(c);
                    }
                }
            }
            return result1;
        }
    }

}
