import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFavoriteComponent } from './single-favorite.component';

describe('SingleFavoriteComponent', () => {
  let component: SingleFavoriteComponent;
  let fixture: ComponentFixture<SingleFavoriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleFavoriteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
