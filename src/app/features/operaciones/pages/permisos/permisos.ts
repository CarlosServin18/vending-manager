import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-permisos',
  standalone: true,
  templateUrl: './permisos.html',
  styleUrl: './permisos.scss'
})
export class Permisos implements OnInit {
  permisos: any;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.get('/permisos').subscribe(data => (this.permisos = data));
  }
}
