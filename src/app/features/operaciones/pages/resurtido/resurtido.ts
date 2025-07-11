import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-resurtido',
  standalone: true,
  templateUrl: './resurtido.html',
  styleUrl: './resurtido.scss'
})
export class Resurtido implements OnInit {
  data: unknown;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.get('resurtido').subscribe(d => (this.data = d));
  }
}
