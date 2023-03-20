import { Component, Input, OnInit } from '@angular/core';
import { Park } from 'src/app/Model/park';

@Component({
  selector: 'app-single-result',
  templateUrl: './single-result.component.html',
  styleUrls: ['./single-result.component.css']
})
export class SingleResultComponent implements OnInit {
  @Input() singleResult:Park = {} as Park;
  constructor() { }

  ngOnInit(): void {
    
  }

}
