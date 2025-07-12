import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../../services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ventas',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './ventas.html',
  styleUrl: './ventas.scss'
})

export class Ventas implements OnInit {
  data: any[] = [];
  filtro = {
    title: '',
    body: '',
    userId: null
  };

  constructor(private api: ApiService) {}
  
  ngOnInit(): void {
    this.api.post('posts',this.filtro).subscribe(d => (this.data = [d]));
  }
}

