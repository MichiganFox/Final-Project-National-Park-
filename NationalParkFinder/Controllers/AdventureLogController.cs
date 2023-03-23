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
             return dbContext.AdventureLogs.Where(l => l.UserId == _userId).ToList();
      
          
        }

        [HttpPost("newEntry")]
        public AdventureLog addEntry(string _parkId, string _details, int _userId, int _rating, string _title)
        {
            AdventureLog newEntry = new AdventureLog()
            {
                ParkId = _parkId,
                Details = _details,
                UserId = _userId,
                Rating = _rating,
                Title = _title
            };
            dbContext.AdventureLogs.Add(newEntry);
            

            List<UserBadge> userBadges = dbContext.UserBadges.Where(b => b.UserId == _userId).ToList();

            if (!(userBadges.Any(b => b.BadgeId == 2)))
            {
                UserBadge newBadge = new UserBadge() {
                    BadgeId= 2,
                    UserId = _userId,
                    
                };
                dbContext.UserBadges.Add(newBadge);
                
            }
            int advCount = dbContext.AdventureLogs.Count(a=> a.UserId== _userId);

            if (!(userBadges.Any(b => b.BadgeId == 3))&& advCount == 5)
            {
                UserBadge newBadge = new UserBadge()
                {
                    BadgeId = 3,
                    UserId = _userId,

                };
                dbContext.UserBadges.Add(newBadge);

            }
            dbContext.SaveChanges();
            return newEntry;


        }

        [HttpPut("changeEntry")]
        public AdventureLog changeEntry(int _id, string _details, int _rating, string _title)
        {
            AdventureLog a = dbContext.AdventureLogs.FirstOrDefault(a => a.Id == _id);
            a.Details = _details;
            a.Rating = _rating;
            a.Title = _title;

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
 

