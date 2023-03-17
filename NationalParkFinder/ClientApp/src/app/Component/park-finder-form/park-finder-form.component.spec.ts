import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkFinderFormComponent } from './park-finder-form.component';

describe('ParkFinderFormComponent', () => {
  let component: ParkFinderFormComponent;
  let fixture: ComponentFixture<ParkFinderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkFinderFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkFinderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
