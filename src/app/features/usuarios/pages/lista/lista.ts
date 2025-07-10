import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-usuarios-lista',
  standalone: true,
  templateUrl: './lista.html',
  styleUrl: './lista.scss'
})
export class UsuariosLista implements OnInit {
  usuarios: any;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.get('/usuarios').subscribe(data => (this.usuarios = data));
  }
}
