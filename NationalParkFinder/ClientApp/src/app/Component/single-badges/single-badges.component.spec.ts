import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBadgesComponent } from './single-badges.component';

describe('SingleBadgesComponent', () => {
  let component: SingleBadgesComponent;
  let fixture: ComponentFixture<SingleBadgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleBadgesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
