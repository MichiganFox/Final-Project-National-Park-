import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Badges } from 'src/app/Model/badges';
import { UserProfile } from 'src/app/Model/user-profile';
import { BadgesService } from 'src/app/Service/badges.service';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.css']
})
export class BadgesComponent {

  @Input() userProfile: UserProfile = {} as UserProfile;

  constructor(private badgesService : BadgesService) {}
  results: Badges[]=[];

  ngOnInit() : void {
    this.getBadges(this.userProfile.id)
  }
  getBadges(id:number):void{
    this.badgesService.getUserBadges(id).subscribe((response:Badges[])=>{
      console.log(response);
      this.results=response;
    }
    )
  }
}
