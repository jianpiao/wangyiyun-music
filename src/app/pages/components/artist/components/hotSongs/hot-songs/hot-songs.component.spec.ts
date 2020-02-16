import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotSongsComponent } from './hot-songs.component';

describe('HotSongsComponent', () => {
  let component: HotSongsComponent;
  let fixture: ComponentFixture<HotSongsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotSongsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
