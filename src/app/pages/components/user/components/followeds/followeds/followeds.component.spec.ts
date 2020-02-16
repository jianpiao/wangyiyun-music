import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowedsComponent } from './followeds.component';

describe('FollowedsComponent', () => {
  let component: FollowedsComponent;
  let fixture: ComponentFixture<FollowedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
