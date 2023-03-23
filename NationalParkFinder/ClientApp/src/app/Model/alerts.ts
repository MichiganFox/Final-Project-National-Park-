
    export interface Response {
        total: string;
        data:  Alert[];
        limit: string;
        start: string;
    }
    
    export interface Alert {
        category:    string;
        description: string;
        id:          string;
        parkCode:    string;
        title:       string;
        url:         string;
    }
    

