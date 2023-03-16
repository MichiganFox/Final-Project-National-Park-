export interface Park {
    
        total: string;
        data:  Datum[];
        limit: string;
        start: string;
    }
    
    export interface Datum {
        activities:     Activity[];
        addresses:      Address[];
        contacts:       Contact[];
        description:    string;
        designation:    string;
        directionsInfo: string;
        directionsUrl:  string;
        entranceFees:   Entrance[];
        entrancePasses: Entrance[];
        fullName:       string;
        id:             string;
        images:         Image[];
        latLong:        string;
        name:           string;
        operatingHours: OperatingHour[];
        parkCode:       string;
        states:         string;
        topics:         Activity[];
        url:            string;
        weatherInfo:    string;
    }
    
    export interface Activity {
        id:   string;
        name: string;
    }
    
    export interface Address {
        line1:      string;
        line2:      string;
        line3:      string;
        city:       string;
        stateCode:  string;
        postalCode: string;
        type:       string;
    }
    
    export interface Contact {
        phoneNumbers:   PhoneNumber[];
        emailAddresses: EmailAddress[];
    }
    
    export interface EmailAddress {
        emailAddress: string;
        description:  string;
    }
    
    export interface PhoneNumber {
        phoneNumber: string;
        description: string;
        extension:   string;
        type:        string;
    }
    
    export interface Entrance {
        cost:        number;
        description: string;
        title:       string;
    }
    
    export interface Image {
        credit:  string;
        altText: string;
        title:   string;
        id:      number;
        caption: string;
        url:     string;
    }
    
    export interface OperatingHour {
        name:          string;
        description:   string;
        standardHours: Hour[];
        exceptions:    Exception[] | null;
    }
    
    export interface Exception {
        name:           string;
        startDate:      string;
        endDate:        string;
        exceptionHours: Hour[];
    }
    
    export interface Hour {
        sunday:    string;
        monday:    string;
        tuesday:   string;
        wednesday: string;
        thursday:  string;
        friday:    string;
        saturday:  string;
    }
    

