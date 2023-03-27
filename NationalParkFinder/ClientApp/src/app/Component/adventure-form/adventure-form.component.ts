import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AdventureLog } from 'src/app/Model/adventure-log';
import { Datum } from 'src/app/Model/park';
import { UserProfile } from 'src/app/Model/user-profile';
import { AdventureLogService } from 'src/app/Service/adventure-log.service';
import { ParkService } from 'src/app/Service/park.service';

@Component({
  selector: 'app-adventure-form',
  templateUrl: './adventure-form.component.html',
  styleUrls: ['./adventure-form.component.css']
})
export class AdventureFormComponent implements OnInit {
 /*  @Output() newSearchEvent = new EventEmitter<string>(); */ 
  @Output() newCreationEvent = new EventEmitter<''>();
  adventureLog: AdventureLog={} as AdventureLog;
  result:string ="";
  incorrectData:boolean = false;

  @Input() profileUser : UserProfile={} as UserProfile;
  constructor(private adventureLogService:AdventureLogService, private parkService:ParkService) { }
  parkResult:Datum[]=[];
  ngOnInit(): void {

    }
    searchByName():void{
      this.parkService.getParksByName(this.result).subscribe((response:Datum[])=>{
        console.log(response);
        this.parkResult=response;
        
    
      })
    
    
    }
    
    
    NewEntry(): void {
      this.adventureLog.userId= this.profileUser.id;
      if(this.adventureLog.title != null && this.adventureLog.parkId != null && this.adventureLog.details != null && this.adventureLog.rating != null){
        this.adventureLogService.NewEntry(this.adventureLog).subscribe((response:AdventureLog)=>{
          console.log(response);
          this.newCreationEvent.emit();
          this.adventureLog = <AdventureLog>{};
          this.parkResult = <Datum[]>{};
          this.incorrectData = false;
        });
        }else{
          this.incorrectData = true;
        }
      }
      
  }



