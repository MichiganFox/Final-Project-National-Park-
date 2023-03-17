import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAdventuresComponent } from './all-adventures.component';

describe('AllAdventuresComponent', () => {
  let component: AllAdventuresComponent;
  let fixture: ComponentFixture<AllAdventuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllAdventuresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllAdventuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
