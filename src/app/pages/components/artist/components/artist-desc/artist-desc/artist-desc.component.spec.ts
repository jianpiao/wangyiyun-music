import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistDescComponent } from './artist-desc.component';

describe('ArtistDescComponent', () => {
  let component: ArtistDescComponent;
  let fixture: ComponentFixture<ArtistDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
