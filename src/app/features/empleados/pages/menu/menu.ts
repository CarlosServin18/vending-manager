import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-empleados-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class EmpleadosMenu implements OnInit {
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.get('/empleados/menu').subscribe();
  }
}
