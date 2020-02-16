import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDjComponent } from './nav-dj.component';

describe('NavDjComponent', () => {
  let component: NavDjComponent;
  let fixture: ComponentFixture<NavDjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavDjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavDjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
