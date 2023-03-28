import { Component, Input } from '@angular/core';
import { AdventureLog } from 'src/app/Model/adventure-log';
import { Datum, Park } from 'src/app/Model/park';
import { UserProfile } from 'src/app/Model/user-profile';
import { AdventureLogService } from 'src/app/Service/adventure-log.service';
import { ParkService } from 'src/app/Service/park.service';
import { UserProfileService } from 'src/app/Service/user-profile.service';

@Component({
  selector: 'app-all-adventures',
  templateUrl: './all-adventures.component.html',
  styleUrls: ['./all-adventures.component.css']
})
export class AllAdventuresComponent {
constructor (private adventureLogService: AdventureLogService, private userProfileService: UserProfileService){}
result:AdventureLog[]=[];


@Input() profileUser : UserProfile={} as UserProfile;

ngOnInit(): void {
  this.getLogs();
}
getLogs():void{
  this.adventureLogService.GetAdventureLogs(this.profileUser.id).subscribe((response:AdventureLog[])=> {
    console.log(response);
    this.result = response;
  });
}
}
