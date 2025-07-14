import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../../../../services/api.service';


@Component({
  selector: 'app-operaciones-menu',
  standalone: true,
  imports: [],
  templateUrl: './lista.html',
  styleUrl: './lista.scss'
})
export class Lista implements OnInit {
  data: unknown;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.get('operaciones-menu').subscribe(d => (this.data = d));
  }
}
