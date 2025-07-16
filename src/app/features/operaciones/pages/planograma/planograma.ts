import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service';
import {CdkDragDrop,moveItemInArray} from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import {OperacionesModule} from '../../operaciones.module';
import {FormsModule} from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

interface PlanogramaSlot {
  slot_id: number;
  maquina_id: string;
  producto_sku: string;
  cantidad: number;
  fila: number;      // ← nuevo
  columna: number;   // ← nuevo
}

@Component({
  selector: 'app-planograma',
  standalone: true,
  imports: [CommonModule,FormsModule,DragDropModule],
  templateUrl: './planograma.html',
  styleUrl: './planograma.scss'

})


export class Planograma implements OnInit {
  slots: PlanogramaSlot[] = [];
  loading = false;
  error = '';
  filtroMaquina = '';

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.loadSlots();
  }

  get maquinasUnicas(): string[] {
    return Array.from(new Set(this.slots.map(s => s.maquina_id)));
  }
  
  loadSlots() {
    this.loading = true;
    this.api.get<PlanogramaSlot[]>('operaciones/planograma').subscribe({
      next: data => { this.slots = data; this.loading = false; },
      error: e    => { this.error = e.message; this.loading = false; }
    });
  }

  saveLayout() {
    this.api.put<PlanogramaSlot[]>('operaciones/planograma', this.slots)
      .subscribe(() => alert('Guardado'), e => alert('Error: '+e.message));
  }

  // para colorear celdas
  getStockClass(c: number) {
    if (c <= 5)    return 'low';
    if (c <= 15)   return 'medium';
    return 'high';
  }

  // helpers para tabla
  get filas(): number[] {
    const rows = this.filteredSlots.map(s => s.fila);
    return Array.from(new Set(rows)).sort((a,b)=>a-b);
}
  get columnas(): number[] {
  const cols = this.filteredSlots.map(s => s.columna);
  return Array.from(new Set(cols)).sort((a,b)=>a-b);
}

  get filteredSlots(): PlanogramaSlot[] {
  return this.filtroMaquina
    ? this.slots.filter(s => s.maquina_id === this.filtroMaquina)
    : this.slots;
}
  getSlot(f: number, c: number): PlanogramaSlot | undefined {
  return this.filteredSlots.find(s => s.fila===f && s.columna===c);
}
}

