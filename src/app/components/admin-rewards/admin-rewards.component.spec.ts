import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRewardsComponent } from './admin-rewards.component';

describe('AdminRewardsComponent', () => {
  let component: AdminRewardsComponent;
  let fixture: ComponentFixture<AdminRewardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRewardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRewardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
