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
        public List<Park> getFavorites(int _userId)
        {
            List<Favorite> resultFavorites = dbContext.Favorites.Where(f=>f.UserId == _userId).ToList();
            List<Park> allParks = ParkDAL.GetPark();
            List<Park> resultParks = new List<Park>();
            foreach (Park park in allParks)
            {
                foreach (Datum d in park.data)
                {
                    foreach(Favorite f in resultFavorites)
                    {
                        if (d.id == f.ParkId)
                        {
                            resultParks.Add(park);
                        }
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
    }
}
