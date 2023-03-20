import { Component, OnInit } from '@angular/core';
import { Park } from 'src/app/Model/park';
import { ParkService } from 'src/app/Service/park.service';

@Component({
  selector: 'app-list-of-results',
  templateUrl: './list-of-results.component.html',
  styleUrls: ['./list-of-results.component.css']
})
export class ListOfResultsComponent implements OnInit {
  result:Park []=[] 
    constructor (private parkService: ParkService){}
  ngOnInit(): void { this.parkService.getParks().subscribe((response: Park[])=>{
      console.log(response);
      this.result = response;
  })
  }


}
