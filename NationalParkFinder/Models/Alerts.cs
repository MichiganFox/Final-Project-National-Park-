namespace NationalParkFinder.Models
{

    public class Response
    {
        public string total { get; set; }
        public string limit { get; set; }
        public string start { get; set; }
        public List<Alert> data { get; set; }
    }

    public class Alert
    {
        public string id { get; set; }
        public string url { get; set; }
        public string title { get; set; }
        public string parkCode { get; set; }
        public string description { get; set; }
        public string category { get; set; }
        public string lastIndexedDate { get; set; }
    }



    /*
            public class Response
            {
                public string total { get; set; }
                public Alert[][] data { get; set; }
                public string limit { get; set; }
                public string start { get; set; }
            }

            public class Alert        {
                public string category { get; set; }
                public string description { get; set; }
                public string id { get; set; }
                public string parkCode { get; set; }
                public string title { get; set; }
                public string url { get; set; }
            }*/

}

