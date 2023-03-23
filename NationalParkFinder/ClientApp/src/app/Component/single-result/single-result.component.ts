import { Component, Input, OnInit } from '@angular/core';
import { Datum, Park } from 'src/app/Model/park';

@Component({
  selector: 'app-single-result',
  templateUrl: './single-result.component.html',
  styleUrls: ['./single-result.component.css']
})
export class SingleResultComponent implements OnInit {
  @Input() singleResult:Datum = {} as Datum;
  constructor() { }

  ngOnInit(): void {
    
  }
  getPicture():string{
    if (this.singleResult.images.length==0){
      return "";
    } else{
      return this.singleResult.images[0].url;
    }
  }

}
