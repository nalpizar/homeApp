import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFamilyComponent } from './admin-family.component';

describe('AdminFamilyComponent', () => {
  let component: AdminFamilyComponent;
  let fixture: ComponentFixture<AdminFamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFamilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
