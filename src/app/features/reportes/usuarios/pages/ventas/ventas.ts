import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../../services/api.service';

@Component({
  selector: 'app-ventas',
  imports: [],
  templateUrl: './ventas.html',
  styleUrl: './ventas.scss'
})
export class Ventas implements OnInit {
  ventas: any;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.get('/reportes/usuarios/ventas').subscribe(data => (this.ventas = data));
  }
}

