import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../../../../services/api.service';


@Component({
  selector: 'app-alacenes',
  standalone: true,
  imports: [],
  templateUrl: './almacenes.html',
  styleUrl: './almacenes.scss'
})
export class Almacenes implements OnInit {
  data: unknown;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.get('alamcenes').subscribe(d => (this.data = d));
  }
}