import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelLocComponent } from './hotel-loc.component';

describe('HotelLocComponent', () => {
  let component: HotelLocComponent;
  let fixture: ComponentFixture<HotelLocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelLocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelLocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
