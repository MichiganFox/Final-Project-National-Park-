using Newtonsoft.Json;
using System.Net;

namespace NationalParkFinder.Models
{
    public class AlertDAL
    {
        public static Rootobject GetAlert(string parkCode)
        {
            //setup
            string key = Secret.apiKey;
            string url = $"https://developer.nps.gov/api/v1/alerts?parkCode=${parkCode}&api_key={key}&limit=474";

            HttpWebRequest request = WebRequest.CreateHttp(url);
            HttpWebResponse response = (HttpWebResponse)request.GetResponse();

            StreamReader reader = new StreamReader(response.GetResponseStream());
            string JSON = reader.ReadToEnd();

            Rootobject model = JsonConvert.DeserializeObject<Rootobject>(JSON);
            return model;
        }
    }
}
