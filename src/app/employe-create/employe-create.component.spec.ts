import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeCreateComponent } from './employe-create.component';

describe('EmployeCreateComponent', () => {
  let component: EmployeCreateComponent;
  let fixture: ComponentFixture<EmployeCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeCreateComponent]
    });
    fixture = TestBed.createComponent(EmployeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
