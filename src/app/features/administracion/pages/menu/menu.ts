import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-administracion-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class AdministracionMenu implements OnInit {
  data: unknown;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.get('administracion-menu').subscribe(d => (this.data = d));
  }
}
