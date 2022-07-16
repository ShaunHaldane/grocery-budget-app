import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalSpendDataComponent } from './total-spend-data.component';

describe('TotalSpendDataComponent', () => {
  let component: TotalSpendDataComponent;
  let fixture: ComponentFixture<TotalSpendDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalSpendDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalSpendDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
