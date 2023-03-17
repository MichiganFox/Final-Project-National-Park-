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

        [HttpPost("newEntry")]
        public AdventureLog addEntry(string _parkId, string _details)
        {
            AdventureLog newEntry = new AdventureLog()
            {
                ParkId = _parkId,
                Details = _details
            };
            dbContext.AdventureLogs.Add(newEntry);
            dbContext.SaveChanges();

            return newEntry;


        }

        [HttpPut("changeEntry")]
        public AdventureLog changeEntry(int _id, string _details)
        {
            AdventureLog a = dbContext.AdventureLogs.FirstOrDefault(a => a.Id == _id);
            a.Details = _details;

            dbContext.AdventureLogs.Update(a);
            dbContext.SaveChanges();

            return a;

        }

        [HttpDelete("deleteItem")]
        public AdventureLog deleteItem(int _id)
        {
            AdventureLog a = dbContext.AdventureLogs.FirstOrDefault(a => a.Id == _id);

            dbContext.AdventureLogs.Remove(a);
            dbContext.SaveChanges();

            return a;
        }
    }
}
 

