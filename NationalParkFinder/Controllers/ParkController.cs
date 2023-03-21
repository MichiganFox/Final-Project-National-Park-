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
                if (d.fullName.Contains(_parkName))
                {
                    resultParks.Add(d);
                }
            }

            return resultParks;

        }

        [HttpGet("getParksByActivity")]
        public List<Datum> GetParksByActivities(string _allResults)
        {
            string[] results = _allResults.Split(',');


            List<Datum> allParks = ParkDAL.GetPark().data.ToList();
            List<Datum> resultParks = new List<Datum>();
            foreach (string r in results)
            {
                List<Datum> parks = GetParksByActivity(r, allParks);
                foreach (Datum park in parks)
                {
                    resultParks.Add(park);
                }

            }
            return resultParks.Distinct().ToList();

        }

        public List<Datum> GetParksByActivity(string _name, List<Datum> _parks)
        {
            List<Datum> resultParks = new List<Datum>();
                foreach (Datum d in _parks)
                {
                    foreach (Activity a in d.activities)
                    {
                        if (a.name == _name)
                        {
                            resultParks.Add(d);
                        }
                    }
                }
            
            return resultParks;
        }
    }
}
