import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialDataPerItemComponent } from './financial-data-per-item.component';

describe('FinancialDataPerItemComponent', () => {
  let component: FinancialDataPerItemComponent;
  let fixture: ComponentFixture<FinancialDataPerItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialDataPerItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialDataPerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
