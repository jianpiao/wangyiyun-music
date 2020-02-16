import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavRankComponent } from './nav-rank.component';

describe('NavRankComponent', () => {
  let component: NavRankComponent;
  let fixture: ComponentFixture<NavRankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavRankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
