import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';
import { Datum } from 'src/app/Model/park';
import { ParkService } from 'src/app/Service/park.service';


@Component({
  selector: 'app-park-finder-form',
  templateUrl: './park-finder-form.component.html',
  styleUrls: ['./park-finder-form.component.css']
})
export class ParkFinderFormComponent {

  
  /* @Output newSearchEvent=new EventEmitter<''>(); */
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

  
  
}
