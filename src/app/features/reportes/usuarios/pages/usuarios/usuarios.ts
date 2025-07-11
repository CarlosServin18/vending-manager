import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../../services/api.service';

@Component({
  selector: 'app-usuarios',
  imports: [],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.scss'
})
export class Usuarios implements OnInit {
  data: unknown;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.get('reportes/usuarios').subscribe(d => (this.data = d));
  }
}
