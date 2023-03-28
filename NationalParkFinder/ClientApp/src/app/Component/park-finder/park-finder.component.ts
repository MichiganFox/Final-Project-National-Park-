import { Component, Input, OnInit } from '@angular/core';
import { Datum, Park } from 'src/app/Model/park';
import { UserProfile } from 'src/app/Model/user-profile';
import { ParkService } from 'src/app/Service/park.service';


@Component({
  selector: 'app-park-finder',
  templateUrl: './park-finder.component.html',
  styleUrls: ['./park-finder.component.css']
})
export class ParkFinderComponent {
  @Input() userProfile:UserProfile= {} as UserProfile;
    result:Datum []=[] 
    constructor (private parkService: ParkService){}
  ngOnInit(): void { 
    this.parkService.getParks().subscribe((response: Datum[])=>{
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




