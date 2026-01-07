import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeCalculatorComponent } from './change-calculator.component';

describe('ChangeCalculatorComponent', () => {
  let component: ChangeCalculatorComponent;
  let fixture: ComponentFixture<ChangeCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
