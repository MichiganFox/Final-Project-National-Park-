import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAdventureComponent } from './single-adventure.component';

describe('SingleAdventureComponent', () => {
  let component: SingleAdventureComponent;
  let fixture: ComponentFixture<SingleAdventureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleAdventureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleAdventureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
