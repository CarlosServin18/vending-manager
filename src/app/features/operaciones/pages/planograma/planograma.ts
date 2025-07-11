import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-planograma',
  standalone: true,
  templateUrl: './planograma.html',
  styleUrl: './planograma.scss'
})
export class Planograma implements OnInit {
  data: unknown;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.get('planograma').subscribe(d => (this.data = d));
  }
}
