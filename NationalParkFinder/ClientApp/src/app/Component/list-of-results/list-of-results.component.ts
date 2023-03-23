import { Component, Input, OnInit } from '@angular/core';

import { Datum } from 'src/app/Model/park';
import { UserProfile } from 'src/app/Model/user-profile';


@Component({
  selector: 'app-list-of-results',
  templateUrl: './list-of-results.component.html',
  styleUrls: ['./list-of-results.component.css']
})
export class ListOfResultsComponent{
 @Input() listResults:Datum[]=[];
 @Input() userProfile:UserProfile={} as UserProfile;
  }



