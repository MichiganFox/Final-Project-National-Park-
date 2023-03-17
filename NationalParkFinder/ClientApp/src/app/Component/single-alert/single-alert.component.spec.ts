import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAlertComponent } from './single-alert.component';

describe('SingleAlertComponent', () => {
  let component: SingleAlertComponent;
  let fixture: ComponentFixture<SingleAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
