namespace NationalParkFinder.Models
{


        public class Rootobject
        {
            public Class1[] Property1 { get; set; }
        }

        public class Class1
        {
            public string total { get; set; }
            public Datum1[][] data { get; set; }
            public string limit { get; set; }
            public string start { get; set; }
        }

        public class Datum1        {
            public string category { get; set; }
            public string description { get; set; }
            public string id { get; set; }
            public string parkCode { get; set; }
            public string title { get; set; }
            public string url { get; set; }
        }

 }

