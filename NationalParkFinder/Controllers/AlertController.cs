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
        public List<Alert> GetAlerts(string _park) 
        {
           return AlertDAL.GetAlert(_park).data;
           
            
            
           
        }
    }

}
