import { Component, Input } from '@angular/core';

import { AdventureLog } from 'src/app/Model/adventure-log';

@Component({
  selector: 'app-single-adventure',
  templateUrl: './single-adventure.component.html',
  styleUrls: ['./single-adventure.component.css']
})
export class SingleAdventureComponent {
@Input() singleAdventure : AdventureLog= {} as AdventureLog;

}
