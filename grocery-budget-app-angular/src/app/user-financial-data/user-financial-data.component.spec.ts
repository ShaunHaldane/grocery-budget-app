import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFinancialDataComponent } from './user-financial-data.component';

describe('UserFinancialDataComponent', () => {
  let component: UserFinancialDataComponent;
  let fixture: ComponentFixture<UserFinancialDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFinancialDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFinancialDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
