
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Datum } from 'src/app/Model/park';
import { States } from 'src/app/Model/states';
import { ParkService } from 'src/app/Service/park.service';



@Component({
  selector: 'app-park-finder-form',
  templateUrl: './park-finder-form.component.html',
  styleUrls: ['./park-finder-form.component.css']
})
export class ParkFinderFormComponent {


 @Output() newSearchEvent = new EventEmitter<string>(); 
 @Output() newFilterEvent = new EventEmitter<Datum[]>();
 
 
 constructor(private parkService:ParkService) {

 }

  toggleDisplay(): void {
    this.display = !this.display;
    this.display2 = false;
  }
  display: boolean = false;
  toggleDisplay2(): void {
    this.display2 = !this.display2;
    this.display = false;
  }
  display2: boolean = false;

  result:string="";
  searchByName():void{
    this.newSearchEvent.emit(this.result)
    console.log(this.result);
  }
  
  filterByActivity():void{
    let parkActivities="";
    document.getElementsByName("Filter").forEach((activity:HTMLElement)=>{
      let input:HTMLInputElement = activity as HTMLInputElement;
      if(input.checked)
      {
        parkActivities += input.value;
      }
    })
    let selectedStates="";
    document.getElementsByName("State").forEach((activity:HTMLElement)=>{
      let input:HTMLInputElement = activity as HTMLInputElement;
      if(input.checked)
      {
        selectedStates += input.value;
      }
    })
    console.log(this.result);
    this.parkService.getParksByActivities(parkActivities, selectedStates).subscribe((response:Datum[])=>{
      console.log(response);
      this.newFilterEvent.emit(response)
    })
   
    
  }

  state:States[]= [
   
      { name: 'Alabama', abbreviation: 'AL' },
      { name: 'Alaska', abbreviation: 'AK' },
      { name: 'Arizona', abbreviation: 'AZ' },
      { name: 'Arkansas', abbreviation: 'AR' },
      { name: 'California', abbreviation: 'CA' },
      { name: 'Colorado', abbreviation: 'CO' },
      { name: 'Connecticut', abbreviation: 'CT' },
      { name: 'Delaware', abbreviation: 'DE' },
      { name: 'Florida', abbreviation: 'FL' },
      { name: 'Georgia', abbreviation: 'GA' },
      { name: 'Hawaii', abbreviation: 'HI' },
      { name: 'Idaho', abbreviation: 'ID' },
      { name: 'Illinois', abbreviation: 'IL' },
      { name: 'Indiana', abbreviation: 'IN' },
      { name: 'Iowa', abbreviation: 'IA' },
      { name: 'Kansas', abbreviation: 'KS' },
      { name: 'Kentucky', abbreviation: 'KY' },
      { name: 'Louisiana', abbreviation: 'LA' },
      { name: 'Maine', abbreviation: 'ME' },
      { name: 'Maryland', abbreviation: 'MD' },
      { name: 'Massachusetts', abbreviation: 'MA' },
      { name: 'Michigan', abbreviation: 'MI' },
      { name: 'Minnesota', abbreviation: 'MN' },
      { name: 'Mississippi', abbreviation: 'MS' },
      { name: 'Missouri', abbreviation: 'MO' },
      { name: 'Montana', abbreviation: 'MT' },
      { name: 'Nebraska', abbreviation: 'NE' },
      { name: 'Nevada', abbreviation: 'NV' },
      { name: 'New Hampshire', abbreviation: 'NH' },
      { name: 'New Jersey', abbreviation: 'NJ' },
      { name: 'New Mexico', abbreviation: 'NM' },
      { name: 'New York', abbreviation: 'NY' },
      { name: 'North Carolina', abbreviation: 'NC' },
      { name: 'North Dakota', abbreviation: 'ND' },
      { name: 'Ohio', abbreviation: 'OH' },
      { name: 'Oklahoma', abbreviation: 'OK' },
      { name: 'Oregon', abbreviation: 'OR' },
      { name: 'Pennsylvania', abbreviation: 'PA' },
      { name: 'Rhode Island', abbreviation: 'RI' },
      { name: 'South Carolina', abbreviation: 'SC' },
      { name: 'South Dakota', abbreviation: 'SD' },
      { name: 'Tennessee', abbreviation: 'TN' },
      { name: 'Texas', abbreviation: 'TX' },
      { name: 'Utah', abbreviation: 'UT' },
      { name: 'Vermont', abbreviation: 'VT' },
      { name: 'Virginia', abbreviation: 'VA' },
      { name: 'Washington', abbreviation: 'WA' },
      { name: 'West Virginia', abbreviation: 'WV' },
      { name: 'Wisconsin', abbreviation: 'WI' },
      { name: 'Wyoming', abbreviation: 'WY' },
      {name: 'Virgin Islands', abbreviation: 'VI'},
      {name: 'Puerto Rico',  abbreviation: 'PR'},
      {name: 'Palau', abbreviation: 'PW'},
      {name: 'Marshall Islands', abbreviation: 'MH'},
      {name: 'Federated States of Micronesia', abbreviation: 'FM'},
      {name: 'Guam', abbreviation: 'GU'},
      {name: 'American Samoa', abbreviation: 'AS'},
      {name: 'District of Columbia', abbreviation: 'DC'},

    ];
    
  
  


  }


