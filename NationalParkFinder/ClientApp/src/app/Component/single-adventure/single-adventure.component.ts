import { Component, EventEmitter, Input, Output } from '@angular/core';

import { AdventureLog } from 'src/app/Model/adventure-log';
import { AdventureLogService } from 'src/app/Service/adventure-log.service';


@Component({
  selector: 'app-single-adventure',
  templateUrl: './single-adventure.component.html',
  styleUrls: ['./single-adventure.component.css']
})
export class SingleAdventureComponent {
@Input() singleAdventure : AdventureLog= {} as AdventureLog;
@Output() newChangeEvent = new EventEmitter<''>();

constructor(private adventureLogService:AdventureLogService){}

  deleteLog():void{
    this.adventureLogService.DeleteItem(this.singleAdventure.id).subscribe((response:AdventureLog)=> {
      console.log(response);
      this.newChangeEvent.emit();
    })
  }
  display:boolean=true;
  alterLog():void{
    this.adventureLogService.ChangeEntry(this.singleAdventure).subscribe((response:AdventureLog)=>{
      console.log(response);
      this.newChangeEvent.emit();
    })
  }
  
}
