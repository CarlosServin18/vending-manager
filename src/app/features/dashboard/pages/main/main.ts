import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main implements OnInit {
  data: any;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.get('/dashboard').subscribe(d => (this.data = d));
  }
}
