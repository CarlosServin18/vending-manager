import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../../services/api.service';

@Component({
  selector: 'app-ventas',
  imports: [],
  templateUrl: './ventas.html',
  styleUrl: './ventas.scss'
})
export class Ventas implements OnInit {
  data: unknown;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.get('reportes/ventas').subscribe(d => (this.data = d));
  }
}

