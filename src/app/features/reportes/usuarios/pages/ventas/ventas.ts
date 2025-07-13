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
  columns: string[] = [];

  filtro = {
    fecha: '',
    empleado: '',
    departamento: '',
    producto: ''
  };

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.cargar();
  }

  cargar() {
    this.api.get<any[]>('reportes/ventas', this.filtro)
      .subscribe({
        next: res => {
          this.data = res;
          // Si llegaron filas, sacamos sus claves como cabeceras:
          this.columns = res.length > 0 
            ? Object.keys(res[0]) 
            : [];
        },
        error: err => console.error('Error al cargar ventas', err)
      });
  }
  descargarCSV(): void {
    if (!this.data.length) return;

    // 1) Construir líneas CSV
    const csvRows = [];
    // encabezados
    csvRows.push(this.columns.join(','));
    // filas
    for (const row of this.data) {
      const valores = this.columns.map(col => {
        const cell = row[col] ?? '';
        // escapamos comillas dobles
        const esc = ('' + cell).replace(/"/g, '""');
        return `"${esc}"`;
      });
      csvRows.push(valores.join(','));
    }

    // 2) Crear blob y enlace de descarga
    const csvString = csvRows.join('\r\n');
    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'reporte_ventas.csv';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }
}

