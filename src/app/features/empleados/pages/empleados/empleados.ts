import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-empleados',
  standalone: true,
  templateUrl: './empleados.html',
  styleUrl: './empleados.scss'
})
export class Empleados implements OnInit {
  empleados: any;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.get('/empleados').subscribe(data => (this.empleados = data));
  }
}
