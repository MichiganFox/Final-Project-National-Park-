using Microsoft.AspNetCore.DataProtection;
using Newtonsoft.Json;
using System.Net;

namespace NationalParkFinder.Models
{
    public class ParkDAL
    {
        public static List<Park> GetPark()
        {
            //setup
            string key = Secret.apiKey;
            string url = $"https://developer.nps.gov/api/v1/parks?api_key={key}"; 

            HttpWebRequest request = WebRequest.CreateHttp(url);
            HttpWebResponse response = (HttpWebResponse)request.GetResponse();

            StreamReader reader = new StreamReader(response.GetResponseStream());
            string JSON = reader.ReadToEnd();

            List<Park> result = JsonConvert.DeserializeObject<List<Park>>(JSON);
            return result;
        }
    }
}
