
import { Component, EventEmitter, Output } from '@angular/core';



@Component({
  selector: 'app-park-finder-form',
  templateUrl: './park-finder-form.component.html',
  styleUrls: ['./park-finder-form.component.css']
})
export class ParkFinderFormComponent {

  
 @Output() newSearchEvent = new EventEmitter<string>(); 
 @Output() newFilterEvent = new EventEmitter<string>();

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
    this.newFilterEvent.emit(this.result)
    console.log(this.result);
  }
}
