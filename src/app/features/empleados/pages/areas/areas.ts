import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-areas',
  standalone: true,
  templateUrl: './areas.html',
  styleUrl: './areas.scss'
})
export class Areas implements OnInit {
  areas: any;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.get('/areas').subscribe(data => (this.areas = data));
  }
}
