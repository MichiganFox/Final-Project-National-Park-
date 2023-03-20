import { Component, OnInit } from '@angular/core';
import { Park } from 'src/app/Model/park';
import { ParksService } from 'src/app/Service/parks.service';

@Component({
  selector: 'app-park-finder',
  templateUrl: './park-finder.component.html',
  styleUrls: ['./park-finder.component.css']
})
export class ParkFinderComponent {

    result:Park[] = {} as Park[];
  constructor(private parkService:ParksService){}

  
  ngOnInit(){

    this.parkService.getParks().subscribe((response:Park[]) => {
      this.result = response;
      console.log(this.result);
    });
}
}
