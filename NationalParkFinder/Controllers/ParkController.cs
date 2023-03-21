using Microsoft.AspNetCore.Mvc;
using NationalParkFinder.Models;

namespace NationalParkFinder.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ParkController : ControllerBase
    {
        //public static List<Datum> allParks = ParkDAL.GetPark().data.ToList();
        [HttpGet("getParks")]
        public List<Datum> GetParks()
        {
            return ParkDAL.GetPark().data.ToList();
        }

        [HttpGet("getParksByName")]
        public List<Datum> GetParksByName(string _parkName)
        {
            Park allParks = ParkDAL.GetPark();
            List<Datum> resultParks = new List<Datum>();

            foreach (Datum d in allParks.data)
            {
                if (d.fullName.ToLower().Trim().Contains(_parkName.ToLower().Trim()))
                {
                    resultParks.Add(d);
                }
            }

            return resultParks;

        }

        [HttpGet("getParksByActivities")]
        public List<Datum> GetParksByActivities(string _allResults)
        {
            string[] results = _allResults.Substring(0,_allResults.Length-1).Split(',');
           
            List<Datum> allParks = ParkDAL.GetPark().data.ToList();
            List<Datum> resultParks = new List<Datum>();
            foreach (Datum park in allParks)
            {
                if (results.All(a => park.activities.Count(p => p.name.Trim().ToLower() == a.Trim().ToLower()) > 0))
                {
                    resultParks.Add(park);
                }
            }

            return resultParks;
        }
            
    }
}
