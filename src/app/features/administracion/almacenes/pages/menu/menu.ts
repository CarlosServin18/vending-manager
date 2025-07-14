import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../../../../services/api.service';


@Component({
  selector: 'app-almacenes-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class Menu implements OnInit {
  data: unknown;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.get('almacenes-menu').subscribe(d => (this.data = d));
  }
}