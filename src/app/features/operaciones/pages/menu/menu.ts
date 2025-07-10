import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-operaciones-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class OperacionesMenu implements OnInit {
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.get('/operaciones/menu').subscribe();
  }
}
