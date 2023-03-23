//export interface Alerts {
    export interface NationalParksParkInfo {
        total: string;
        data:  Array<Datum1[]>;
        limit: string;
        start: string;
    }
    
    export interface Datum1 {
        category:    string;
        description: string;
        id:          string;
        parkCode:    string;
        title:       string;
        url:         string;
    }
    

