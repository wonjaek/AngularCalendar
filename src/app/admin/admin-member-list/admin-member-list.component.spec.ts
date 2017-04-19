import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMemberListComponent } from './admin-member-list.component';

describe('AdminMemberListComponent', () => {
  let component: AdminMemberListComponent;
  let fixture: ComponentFixture<AdminMemberListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMemberListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMemberListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
