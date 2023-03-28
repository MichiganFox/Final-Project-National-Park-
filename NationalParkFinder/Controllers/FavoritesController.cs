using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NationalParkFinder.Models;

namespace NationalParkFinder.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FavoritesController : ControllerBase
    {
        NpsContext dbContext = new NpsContext();

        [HttpGet("getFavorites")]
        public List<Datum> getFavorites(int _userId)
        {
            List<Favorite> resultFavorites = dbContext.Favorites.Where(f=>f.UserId == _userId).ToList();
            List<Datum> resultParks = new List<Datum>();
            
                foreach (Datum d in ParkController.allParks)
                {
                    foreach(Favorite f in resultFavorites)
                    {
                        if (d.id == f.ParkId)
                        {
                            resultParks.Add(d);
                        }
                    }
                   
                }
            

           return resultParks;
        }

        [HttpPost("addFavorite")]
        public Favorite addFavorite(int _userId, string _parkId)
        {
            Favorite result = new Favorite()
            {
                ParkId = _parkId,
                UserId = _userId
            };
            dbContext.Favorites.Add(result);
            dbContext.SaveChanges();

            return result;

        }
        [HttpPost("removeFavorite")]
        public Favorite removeFavorite(int _favoriteId)
        {
            
            Favorite result = dbContext.Favorites.FirstOrDefault(f => f.Id == _favoriteId);
            dbContext.Favorites.Remove(result);
            dbContext.SaveChanges();

            return (result);

        }
        [HttpGet("checkIfAFavorite")]
        public bool checkIfAFavorite(string _parkId, int _userId)
        {
            List<Favorite> personalFav = dbContext.Favorites.Where(f => f.UserId == _userId).ToList();

            return personalFav.Any(f => f.ParkId == _parkId);
        }
    }
}
