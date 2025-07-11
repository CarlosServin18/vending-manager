import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-departamentos',
  standalone: true,
  templateUrl: './departamentos.html',
  styleUrl: './departamentos.scss'
})
export class Departamentos implements OnInit {
  data: unknown;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.get('departamentos').subscribe(d => (this.data = d));
  }
}
