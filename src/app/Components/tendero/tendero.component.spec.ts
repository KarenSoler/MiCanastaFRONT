import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenderoComponent } from './tendero.component';

describe('TenderoComponent', () => {
  let component: TenderoComponent;
  let fixture: ComponentFixture<TenderoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenderoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenderoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
