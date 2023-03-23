using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NationalParkFinder.Models;

namespace NationalParkFinder.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BadgeController : ControllerBase
    {
        NpsContext dbContext = new NpsContext();

        [HttpGet("getUserBadges")]
        public List<Badge> getUserBadges(int _userId)
        {
            List<UserBadge> achievedBadges = dbContext.UserBadges.Where(u => u.UserId == _userId).ToList();
            List<Badge> badgeList = dbContext.Badges.ToList();
            List<Badge> badgesEarned = new List<Badge>();

            foreach(UserBadge badge in achievedBadges) 
            { 
                foreach(Badge b in badgeList) {
                    if (badge.BadgeId == b.Id)
                    {
                        badgesEarned.Add(b);
                    }
                }       
                  
            }
            return badgesEarned;
        }

        [HttpPost("awardBadge")]
        public UserBadge awardBadge(int _userId, int _badgeId)
        {
            UserBadge awarded = new UserBadge()
            {
                BadgeId = _badgeId,
                UserId = _userId
            };
            dbContext.UserBadges.Add(awarded);
            dbContext.SaveChanges();
            return awarded;
        }
    }
}
