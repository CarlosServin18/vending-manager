import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../../services/api.service';

@Component({
  selector: 'app-productos-x-empleado',
  imports: [],
  templateUrl: './productos-x-empleado.html',
  styleUrl: './productos-x-empleado.scss'
})
export class ProductosXEmpleado implements OnInit {
  data: unknown;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.get('reportes/productos-x-empleado').subscribe(d => (this.data = d));
  }
}
