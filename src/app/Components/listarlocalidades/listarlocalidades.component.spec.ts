import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarlocalidadesComponent } from './listarlocalidades.component';

describe('ListarlocalidadesComponent', () => {
  let component: ListarlocalidadesComponent;
  let fixture: ComponentFixture<ListarlocalidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarlocalidadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarlocalidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
