import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSingerComponent } from './nav-singer.component';

describe('NavSingerComponent', () => {
  let component: NavSingerComponent;
  let fixture: ComponentFixture<NavSingerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavSingerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavSingerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
