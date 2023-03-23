import { Component, Input, OnInit } from '@angular/core';
import { Alert } from 'src/app/Model/alerts';
import { Datum } from 'src/app/Model/park';
import { AlertService } from 'src/app/Service/alert.service';

@Component({
  selector: 'app-single-alert',
  templateUrl: './single-alert.component.html',
  styleUrls: ['./single-alert.component.css']
})
export class SingleAlertComponent implements OnInit{

  @Input() singleAlert: Datum= {} as Datum;
  constructor(private alertService:AlertService){  }
  result:Alert[]=[];

  ngOnInit(){
    this.getAlerts();
  }

  getAlerts():void{
    this.alertService.getAlerts(this.singleAlert.parkCode).subscribe((response:Alert[])=>{
      console.log(response);
      this.result=response;
    })
  }
}
