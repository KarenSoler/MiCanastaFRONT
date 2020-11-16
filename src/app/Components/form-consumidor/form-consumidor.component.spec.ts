import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConsumidorComponent } from './form-consumidor.component';

describe('FormConsumidorComponent', () => {
  let component: FormConsumidorComponent;
  let fixture: ComponentFixture<FormConsumidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormConsumidorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormConsumidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
