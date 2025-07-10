import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../../services/api.service';

@Component({
  selector: 'app-usuarios',
  imports: [],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.scss'
})
export class Usuarios implements OnInit {
  usuarios: any;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.get('/reportes/usuarios/usuarios').subscribe(data => (this.usuarios = data));
  }
}
