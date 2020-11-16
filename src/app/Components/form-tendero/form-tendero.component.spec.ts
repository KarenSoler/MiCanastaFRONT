import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTenderoComponent } from './form-tendero.component';

describe('FormTenderoComponent', () => {
  let component: FormTenderoComponent;
  let fixture: ComponentFixture<FormTenderoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTenderoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTenderoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
