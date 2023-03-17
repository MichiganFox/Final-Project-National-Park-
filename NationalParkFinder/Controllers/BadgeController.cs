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
        public List<UserBadge> getUserBadges(int _userId)
        {
            List<UserBadge> achievedBadges = dbContext.UserBadges.Where(u => u.UserId == _userId).ToList();
            return achievedBadges;
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
