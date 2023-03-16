import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkFinderComponent } from './park-finder.component';

describe('ParkFinderComponent', () => {
  let component: ParkFinderComponent;
  let fixture: ComponentFixture<ParkFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkFinderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
