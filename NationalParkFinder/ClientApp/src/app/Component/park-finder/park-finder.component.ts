import { Component, OnInit } from '@angular/core';
import { Datum, Park } from 'src/app/Model/park';
import { ParkService } from 'src/app/Service/park.service';


@Component({
  selector: 'app-park-finder',
  templateUrl: './park-finder.component.html',
  styleUrls: ['./park-finder.component.css']
})
export class ParkFinderComponent {

    result:Datum []=[] 
    constructor (private parkService: ParkService){}
  ngOnInit(): void { this.parkService.getParks().subscribe((response: Datum[])=>{
      console.log(response);
      this.result = response;
  })
  }
  searchByName(name:string):void{
    this.parkService.getParksByName(name).subscribe((response:Datum[])=>{
      console.log(response);
      this.result=response;

    })
    
  }

  getParksByActivities(activity:string):void{
    this.parkService.getParksByActivities(activity).subscribe((response:Datum[])=>{
      console.log(response);
      this.result=response;
    })
  }
 
}




