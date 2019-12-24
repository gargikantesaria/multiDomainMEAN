import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBusinessHomeComponent } from './user-business-home.component';

describe('UserBusinessHomeComponent', () => {
  let component: UserBusinessHomeComponent;
  let fixture: ComponentFixture<UserBusinessHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBusinessHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBusinessHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
