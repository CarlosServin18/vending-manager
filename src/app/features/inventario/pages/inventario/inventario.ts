import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-inventario',
  standalone: true,
  templateUrl: './inventario.html',
  styleUrl: './inventario.scss'
})
export class Inventario implements OnInit {
  inventario: any;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.get('/inventario').subscribe(data => (this.inventario = data));
  }
}
