import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrtiendaComponent } from './irtienda.component';

describe('IrtiendaComponent', () => {
  let component: IrtiendaComponent;
  let fixture: ComponentFixture<IrtiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IrtiendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IrtiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
