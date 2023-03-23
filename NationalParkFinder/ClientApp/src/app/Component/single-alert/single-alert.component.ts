import { Component, Input } from '@angular/core';
import { Datum } from 'src/app/Model/park';

@Component({
  selector: 'app-single-alert',
  templateUrl: './single-alert.component.html',
  styleUrls: ['./single-alert.component.css']
})
export class SingleAlertComponent {

  @Input() singleAlert: Datum= {} as Datum;
  
}
