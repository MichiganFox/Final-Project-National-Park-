import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeDetailsComponent } from './badge-details.component';

describe('BadgeDetailsComponent', () => {
  let component: BadgeDetailsComponent;
  let fixture: ComponentFixture<BadgeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadgeDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadgeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
