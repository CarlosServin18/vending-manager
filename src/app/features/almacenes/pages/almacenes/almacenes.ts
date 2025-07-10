import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-almacenes',
  standalone: true,
  templateUrl: './almacenes.html',
  styleUrl: './almacenes.scss'
})
export class Almacenes implements OnInit {
  almacenes: any;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.get('/almacenes').subscribe(data => (this.almacenes = data));
  }
}
