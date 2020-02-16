import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPlaylistComponent } from './nav-playlist.component';

describe('NavPlaylistComponent', () => {
  let component: NavPlaylistComponent;
  let fixture: ComponentFixture<NavPlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavPlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
