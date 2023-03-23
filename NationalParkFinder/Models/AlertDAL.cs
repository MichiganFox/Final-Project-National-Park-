using Newtonsoft.Json;
using System.Net;

namespace NationalParkFinder.Models
{
    public class AlertDAL
    {
        public static Response GetAlert(string parkCode)
        {
            //setup
            string key = Secret.apiKey;
            string url = $"https://developer.nps.gov/api/v1/alerts?parkCode=${parkCode}&api_key={key}&limit=10";

            HttpWebRequest request = WebRequest.CreateHttp(url);
            HttpWebResponse response = (HttpWebResponse)request.GetResponse();

            StreamReader reader = new StreamReader(response.GetResponseStream());
            string JSON = reader.ReadToEnd();

            Response model = JsonConvert.DeserializeObject<Response>(JSON);
            return model;
        }
    }
}
