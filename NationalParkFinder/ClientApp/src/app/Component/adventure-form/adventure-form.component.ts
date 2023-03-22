import { Component, Input, OnInit } from '@angular/core';
import { AdventureLog } from 'src/app/Model/adventure-log';
import { UserProfile } from 'src/app/Model/user-profile';
import { AdventureLogService } from 'src/app/Service/adventure-log.service';

@Component({
  selector: 'app-adventure-form',
  templateUrl: './adventure-form.component.html',
  styleUrls: ['./adventure-form.component.css']
})
export class AdventureFormComponent implements OnInit {
 
  adventureLog: AdventureLog={} as AdventureLog;


  @Input() profileUser : UserProfile={} as UserProfile;
  constructor(private adventureLogService:AdventureLogService) { }

  ngOnInit(): void {

    }
    searchByName():void{
      this.newSearchEvent.emit(this.result)
      console.log(this.result);
    }
    
    NewEntry(): void {
      this.adventureLog.parkId
      this.adventureLogService.NewEntry(this.adventureLog).subscribe((response:AdventureLog)=>{
      console.log(response);

    });
    }
  }



