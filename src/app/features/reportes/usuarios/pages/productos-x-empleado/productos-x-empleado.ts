import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../../services/api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos-x-empleado',
  imports: [FormsModule,CommonModule],
  templateUrl: './productos-x-empleado.html',
  styleUrl: './productos-x-empleado.scss'
})
export class ProductosXEmpleado implements OnInit {
  data: any[] = [];
  columns: string[] = [];

  filtro = {
    Nombre: '',
    producto: '',
    
  };

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.cargar();
  }

  cargar() {
    this.api.get<any[]>('reportes/productos', this.filtro)
      .subscribe({
        next: res => {
          this.data = res;
          
          this.columns = res.length > 0 
            ? Object.keys(res[0]) 
            : [];
        },
        error: err => console.error('Error al cargar ventas', err)
      });
  }

  descargarCSV(): void {
    if (!this.data.length) return;

    
    const csvRows = [];
    
    csvRows.push(this.columns.join(','));
     
    for (const row of this.data) {
      const valores = this.columns.map(col => {
        const cell = row[col] ?? '';
         
        const esc = ('' + cell).replace(/"/g, '""');
        return `"${esc}"`;
      });
      csvRows.push(valores.join(','));
    }

    
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
