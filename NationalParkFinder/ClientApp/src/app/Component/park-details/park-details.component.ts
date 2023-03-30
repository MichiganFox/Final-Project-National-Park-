import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Datum} from 'src/app/Model/park';
import { ParkService } from 'src/app/Service/park.service';

@Component({
  selector: 'app-park-details',
  templateUrl: './park-details.component.html',
  styleUrls: ['./park-details.component.css']
})
export class ParkDetailsComponent implements OnInit {


  constructor(private route:ActivatedRoute, private parkService:ParkService) { }

  displayPark:Datum = {} as Datum;
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    let id:string = String(routeParams.get("id"));
    console.log(id);
    this.parkService.getParkById(id).subscribe((response:Datum)=>{
      this.displayPark=response
    });

  }

}
