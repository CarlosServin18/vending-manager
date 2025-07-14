import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service';
import { select, scaleBand, scaleLinear, axisBottom, axisLeft, max } from 'd3';

@Component({
  selector: 'app-main',
  standalone: true,
  template: `<div #chart></div>`,
  styles: [ `:host { display:block; }` ]
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChild('chart', { static: true }) chartContainer!: ElementRef<HTMLDivElement>;

  data: { date: string; amount: number }[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    // Carga inicial de datos
    this.api.get<{ date: string; amount: number }[]>('dashboard')
      .subscribe(d => {
        this.data = d;
        // Si prefieres, puedes redibujar aquí también:
        // this.createChart();
      });
  }

  // ← Este método faltaba
  ngAfterViewInit(): void {
    // Asegura que el <div #chart> ya está en el DOM
    this.createChart();
  }

  private createChart(): void {
    const element = this.chartContainer.nativeElement;
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = 600 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const svg = select(element)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = scaleBand<string>()
      .domain(this.data.map(d => d.date))
      .range([0, width])
      .padding(0.1);

    const y = scaleLinear<number>()
      .domain([0, max(this.data, d => d.amount)!])
      .nice()
      .range([height, 0]);

    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(axisBottom(x));

    svg.append('g')
      .call(axisLeft(y));

    svg.selectAll('.bar')
      .data(this.data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', d => x(d.date)!)
      .attr('y', d => y(d.amount))
      .attr('width', x.bandwidth())
      .attr('height', d => height - y(d.amount))
      .attr('fill', '#4a90e2');
  }
}
