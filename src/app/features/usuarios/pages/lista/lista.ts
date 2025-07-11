import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-usuarios-lista',
  standalone: true,
  templateUrl: './lista.html',
  styleUrl: './lista.scss'
})
export class UsuariosLista implements OnInit {
  data: unknown;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.get('usuarios-lista').subscribe(d => (this.data = d));
  }
}
