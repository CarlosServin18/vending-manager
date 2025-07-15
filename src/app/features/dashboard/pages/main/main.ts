import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="layout">

      <!-- Main Content -->
      <div class="main">
        <!-- Top Menu Buttons -->
        <div class="top-actions">
          <button>Vending Machine Management</button>
          <button>Sales Reports</button>
          <button>Customer/User Management</button>
          <button>Profile Settings</button>
        </div>

        <!-- KPIs -->
        <div class="kpis">
          <div class="kpi-card">
            <p class="label">Total Sales</p>
            <p class="value">{{ totalSales | currency }}</p>
            <p class="delta positive">+10%</p>
          </div>
          <div class="kpi-card">
            <p class="label">Machines Online</p>
            <p class="value">{{ machinesOnline }}</p>
            <p class="delta negative">-5%</p>
          </div>
          <div class="kpi-card">
            <p class="label">Alerts</p>
            <p class="value">{{ alerts }}</p>
            <p class="delta positive">+2%</p>
          </div>
        </div>

        <!-- Table -->
        <section class="table-section">
          <h2>Vending Machines Overview</h2>
          <table>
            <thead>
              <tr>
                <th>Machine ID</th>
                <th>Location</th>
                <th>Total Sales</th>
                <th>Stock Status</th>
                <th>Alerts</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let m of machines">
                <td>{{ m.id }}</td>
                <td>{{ m.location }}</td>
                <td>{{ m.sales | currency }}</td>
                <td><span class="status">{{ m.status }}</span></td>
                <td>{{ m.alerts }}</td>
              </tr>
            </tbody>
          </table>
        </section>

        <!-- Charts -->
        <section class="charts">
          <div class="chart-card sales-trend">
            <h3>Sales Trends</h3>
            <canvas #lineChart></canvas>
          </div>
          <div class="chart-card map-overview">
            <h3>Machine Locations</h3>
            <div class="map-placeholder">[Mapa de ubicaciones]</div>
          </div>
        </section>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; height: 100vh; overflow: hidden; font-family: sans-serif; }
    .layout { display: flex; height: 100%; }

    /* SIDEBAR */
    .sidebar {
      width: 200px;
      background: #f8f9fa;
      padding: 1rem;
      border-right: 1px solid #e0e0e0;
    }
    .brand { font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem; }
    .menu a {
      display: block;
      padding: .5rem 0;
      color: #333;
      text-decoration: none;
      border-radius: 4px;
      margin-bottom: .25rem;
    }
    .menu a.active,
    .menu a:hover { background: #e9ecef; }

    /* MAIN CONTENT */
    .main {
      flex: 1;
      padding: 1.5rem;
      overflow-y: auto;
    }

    /* TOP ACTIONS */
    .top-actions {
      display: flex;
      gap: .5rem;
      margin-bottom: 1.5rem;
    }
    .top-actions button {
      flex: 1;
      padding: .75rem;
      background: #fff;
      border: 1px solid #e0e0e0;
      border-radius: 6px;
      cursor: pointer;
      transition: background .2s;
    }
    .top-actions button:hover { background: #f1f3f5; }

    /* KPIs */
    .kpis {
      display: flex;
      gap: 1rem;
      margin-bottom: 2rem;
    }
    .kpi-card {
      flex: 1;
      background: #fff;
      border: 1px solid #e0e0e0;
      border-radius: 6px;
      padding: 1rem;
      text-align: center;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    }
    .label { color: #666; font-size: .9rem; }
    .value { font-size: 1.75rem; margin: .5rem 0; }
    .delta { font-size: .9rem; }
    .positive { color: #28a745; }
    .negative { color: #dc3545; }

    /* TABLE */
    .table-section {
      background: #fff;
      border: 1px solid #e0e0e0;
      border-radius: 6px;
      padding: 1rem;
      margin-bottom: 2rem;
    }
    table { width: 100%; border-collapse: collapse; }
    th, td { text-align: left; padding: .75rem; border-bottom: 1px solid #e9ecef; }
    th { background: #f1f3f5; }
    .status {
      padding: .25rem .5rem;
      background: #e9ecef;
      border-radius: 4px;
      font-size: .85rem;
    }

    /* CHARTS */
    .charts {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 1rem;
      margin-bottom: 2rem;
    }
    .chart-card {
      background: #fff;
      border: 1px solid #e0e0e0;
      border-radius: 6px;
      padding: 1rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    }
    .chart-card h3 { margin-top: 0; margin-bottom: 1rem; }
    .chart-card canvas { width: 100% !important; height: 250px !important; }

    .map-placeholder {
      height: 250px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #999;
      background: #f8f9fa;
      border-radius: 4px;
    }
  `]
})
export class DashboardComponent implements AfterViewInit {
  @ViewChild('lineChart') lineChart!: ElementRef<HTMLCanvasElement>;

  totalSales = 12500;
  machinesOnline = 25;
  alerts = 3;

  machines = [
    { id: 'VM-001', location: 'Downtown Office', sales: 3200, status: 'Good', alerts: 'None' },
    { id: 'VM-002', location: 'University Campus', sales: 2800, status: 'Low Stock', alerts: 'Temp Alert' },
    { id: 'VM-003', location: 'Shopping Mall', sales: 2500, status: 'Good', alerts: 'None' },
    { id: 'VM-004', location: 'Gym', sales: 2000, status: 'Out of Stock', alerts: 'Payment Issue' },
    { id: 'VM-005', location: 'Library', sales: 2000, status: 'Good', alerts: 'None' }
  ];

  ngAfterViewInit(): void {
    this.renderLineChart();
  }

  private renderLineChart(): void {
    const ctx = this.lineChart.nativeElement.getContext('2d')!;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul'],
        datasets:[{
          label:'Monthly Sales',
          data:[1200,1500,1300,1700,1600,1800,2000],
          borderColor:'#4a90e2',
          backgroundColor:'rgba(74,144,226,0.1)',
          fill:true,
          tension:0.4
        }]
      },
      options:{
        plugins:{ legend:{ display:false }},
        scales:{ y:{ beginAtZero:true } }
      }
    });
  }
}
