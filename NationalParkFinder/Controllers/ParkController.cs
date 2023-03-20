using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Diagnostics.HealthChecks;
using NationalParkFinder.Models;

namespace NationalParkFinder.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ParkController : ControllerBase
    {
        [HttpGet("getParks")]
        public Park GetParks()
        {
            return ParkDAL.GetPark();
        }
        [HttpGet("getParksByName")]
        public Park GetParksByName(string _parkName)
        {

            Park allParks = ParkDAL.GetPark();
            Park resultParks = new Park();
            
            
                foreach(Datum d in allParks.data)
                {
                    if (d.fullName.Contains(_parkName))
                        {
                        //resultParks.Add(park);
                    }
                }
            
            return resultParks;
            /*allParks.Where(park => park.data.Where(p => p.fullName.Contains(_parkName));*/
        }
        
        [HttpGet("getParksByActivity")]
        public List<Park> GetParksByActivities(string _allResults) { 
            string[] results= _allResults.Split(',');
            
            
            //List<Park> allParks = ParkDAL.GetPark();
            List<Park> resultParks = new List<Park>();
            foreach(string r in results)
            {
                //List<Park> parks = GetParksByActivity(r, allParks);
               // foreach(Park park in parks)
                {
                    //resultParks.Add(park);
                }

            }
            return resultParks.Distinct().ToList();

        }

        public List<Park> GetParksByActivity(string _name, List<Park> _parks)
        {
            List<Park> resultParks = new List<Park>();
            foreach(Park park in _parks)
            {
                foreach(Datum d in park.data)
                {
                    foreach(Activity a in d.activities)
                    {
                        if(a.name == _name)
                        {
                            resultParks.Add(park);
                        }
                    }
                }
            }
            return resultParks;
        }
    }
}
