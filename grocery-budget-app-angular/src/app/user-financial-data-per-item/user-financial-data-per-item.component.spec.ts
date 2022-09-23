import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFinancialDataPerItemComponent } from './user-financial-data-per-item.component';

describe('UserFinancialDataPerItemComponent', () => {
  let component: UserFinancialDataPerItemComponent;
  let fixture: ComponentFixture<UserFinancialDataPerItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFinancialDataPerItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFinancialDataPerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
