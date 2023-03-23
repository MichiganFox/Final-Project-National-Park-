using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NationalParkFinder.Models;

namespace NationalParkFinder.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfileController : ControllerBase
    {
        NpsContext dbContext = new NpsContext();
        [HttpGet("getUserProfile")]
        public UserProfile getUserProfile(string _googleId)
        {
            return dbContext.UserProfiles.FirstOrDefault(p => p.GoogleId == _googleId);
        }
        [HttpPut("updateUserProfile")]
        public UserProfile updateUserProfile(int _profileId, string _googleId, string _region, string _username, string _homeTown, string _activities, string _lodging, string _style) 
        {
            UserProfile currentProfile = dbContext.UserProfiles.FirstOrDefault(p => p.Id == _profileId);
            currentProfile.GoogleId = _googleId;
            currentProfile.Region = _region;
            currentProfile.UserName= _username;
            currentProfile.Hometown= _homeTown;
            currentProfile.Activities= _activities;
            currentProfile.Lodging= _lodging;
            currentProfile.Style= _style;
            dbContext.SaveChanges();
            return currentProfile;
        }
        [HttpPost("createUserProfile")]
        public UserProfile createUserProfile(string _googleId, string _region, string _username, string _homeTown, string _activities, string _lodging, string _style)
        {
            if(dbContext.UserProfiles.Any(p => p.GoogleId == _googleId))
            {
                return null;
            }
            else
            {
                UserProfile newProfile = new UserProfile()
                {
                    GoogleId = _googleId,
                    Region = _region,
                    UserName = _username,
                    Hometown = _homeTown,
                    Activities = _activities,
                    Lodging = _lodging,
                    Style = _style
                };
                dbContext.UserProfiles.Add(newProfile);
                dbContext.SaveChanges();
                return newProfile;
            }
             
        }
    }
}
