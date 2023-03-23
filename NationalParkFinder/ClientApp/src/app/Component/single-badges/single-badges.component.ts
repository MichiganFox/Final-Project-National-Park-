import { Component, Input } from '@angular/core';
import { Badges } from 'src/app/Model/badges';

@Component({
  selector: 'app-single-badges',
  templateUrl: './single-badges.component.html',
  styleUrls: ['./single-badges.component.css']
})
export class SingleBadgesComponent {

  @Input() singleBadges: Badges= {} as Badges;
}
