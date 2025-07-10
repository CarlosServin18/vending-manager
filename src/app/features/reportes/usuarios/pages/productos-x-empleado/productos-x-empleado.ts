import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../../services/api.service';

@Component({
  selector: 'app-productos-x-empleado',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './productos-x-empleado.html',
  styleUrl: './productos-x-empleado.scss'
})
export class ProductosXEmpleado implements OnInit {
  filtro = {
    password: '',
    orden: '',
    celular: ''
  };

  productos: any;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    // Carga inicial si se necesita
    this.api.post('manychat_cupon', {}).subscribe(data => (this.productos = data));
  }

  filtrarUsuarios() {
    this.api.post('manychat_cupon', this.filtro).subscribe(data => {
      this.productos = data;
    });
  }
}
