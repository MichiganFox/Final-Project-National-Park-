using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualBasic;
using NationalParkFinder.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace NationalParkFinder.Controllers
{
    [Route("api/[controller]")]
    public class AdventureLogController : Controller
    {
        NpsContext dbContext = new NpsContext();

        [HttpGet("getAdventureLog")]
        public List<AdventureLog> GetAdventureLogs(int _userId)
        {
            List<AdventureLog> results = new List<AdventureLog>();
            List<UserAdventureLog> userLog = dbContext.UserAdventureLogs.Where(l => l.UserId == _userId).ToList();
            foreach (AdventureLog L in dbContext.AdventureLogs)
            {
                foreach (UserAdventureLog B in userLog)
                {
                    if (L.Id == B.AdventureId)
                    {
                        results.Add(L);

                    }
                }
            }
            return results;
        }




        //[HttpPost("addEntry")]
        //public List<UserAdventureLog> addEntry()
        //{

        //}


    }
}

