using Microsoft.AspNetCore.DataProtection;
using Newtonsoft.Json;
using System.Net;
using System.Text.RegularExpressions;

namespace NationalParkFinder.Models
{
    public class ParkDAL
    {
        public static Park GetPark()
        {
            //setup
            string key = Secret.apiKey;
            string url = $"https://developer.nps.gov/api/v1/parks?api_key={key}"; 

            HttpWebRequest request = WebRequest.CreateHttp(url);
            HttpWebResponse response = (HttpWebResponse)request.GetResponse();

            StreamReader reader = new StreamReader(response.GetResponseStream());
            string JSON = reader.ReadToEnd();

           return DeserializeJson(JSON);
        }
        private static string HtmlToPlainText(string JsonString)
        {
            const string tagWhiteSpace = @"(>|$)(\W|\n|\r)+<";
            const string stripFormatting = @"<[^>]*(>|$)";
            const string lineBreak = @"<(br|BR)\s{0,1}\/{0,1}>";
            var lineBreakRegex = new Regex(lineBreak, RegexOptions.Multiline);
            var stripFormattingRegex = new Regex(stripFormatting, RegexOptions.Multiline);
            var tagWhiteSpaceRegex = new Regex(tagWhiteSpace, RegexOptions.Multiline);
            var text = JsonString;
            text = System.Net.WebUtility.HtmlDecode(text);
            text = tagWhiteSpaceRegex.Replace(text, "><");
            text = lineBreakRegex.Replace(text, Environment.NewLine);
            text = stripFormattingRegex.Replace(text, string.Empty);
            return text;
        }

        private static Park DeserializeJson(string jsonString)
        {
            var loop = true;
            do
            {
                try
                {
                    var m = JsonConvert.DeserializeObject<Park>(jsonString);
                    loop = false;
                }
                catch (JsonReaderException ex)
                {
                    var position = ex.LinePosition;
                    var invalidChar = jsonString.Substring(position - 2, 2);
                    invalidChar = invalidChar.Replace("\"", "'");
                    jsonString = $"{jsonString.Substring(0, position - 1)}{invalidChar}  {jsonString.Substring(position)}";
                }
            } while (loop);
            return JsonConvert.DeserializeObject<Park>(jsonString);
        }
    }
}
