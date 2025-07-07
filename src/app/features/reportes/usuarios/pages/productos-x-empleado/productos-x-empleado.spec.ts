import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosXEmpleado } from './productos-x-empleado';

describe('ProductosXEmpleado', () => {
  let component: ProductosXEmpleado;
  let fixture: ComponentFixture<ProductosXEmpleado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductosXEmpleado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosXEmpleado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
