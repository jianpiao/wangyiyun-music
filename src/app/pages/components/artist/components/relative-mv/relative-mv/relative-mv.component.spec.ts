import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelativeMvComponent } from './relative-mv.component';

describe('RelativeMvComponent', () => {
  let component: RelativeMvComponent;
  let fixture: ComponentFixture<RelativeMvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelativeMvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelativeMvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
