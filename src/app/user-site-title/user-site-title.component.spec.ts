import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSiteTitleComponent } from './user-site-title.component';

describe('UserSiteTitleComponent', () => {
  let component: UserSiteTitleComponent;
  let fixture: ComponentFixture<UserSiteTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSiteTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSiteTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
