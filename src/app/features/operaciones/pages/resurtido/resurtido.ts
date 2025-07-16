import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ResurtirRecord {
  vending_id: string;
  producto_sku: string;
  fecha: string;    // ISO date string, vinculado al <input type="date">
  cantidad: number;
}

@Component({
  selector: 'app-resurtido',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './resurtido.html',
  styleUrls: ['./resurtido.scss']
})
export class Resurtido implements OnInit {
  resurtirRecords: ResurtirRecord[] = [];
  loading = false;
  error = '';

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.loadResurtir();
  }

  /** Trae el listado actual de resurtidos */
  loadResurtir(): void {
    this.loading = true;
    this.error = '';
    this.api.get<ResurtirRecord[]>('operaciones/resurtir')
      .subscribe({
        next: data => {
          this.resurtirRecords = data;
          this.loading = false;
        },
        error: e => {
          this.error = e.message;
          this.loading = false;
        }
      });
  }

  /** Guarda (reemplaza) el listado de resurtidos en el backend */
  saveResurtir(): void {
    this.loading = true;
    this.error = '';
    this.api
      .post<ResurtirRecord[]>('operaciones/resurtir', this.resurtirRecords)
      .subscribe({
        next: data => {
          this.resurtirRecords = data;
          this.loading = false;
          alert('😎 Resurtido guardado con éxito');
        },
        error: e => {
          this.error = e.message;
          this.loading = false;
          alert('❌ Error al guardar: ' + e.message);
        }
      });
  }
}
