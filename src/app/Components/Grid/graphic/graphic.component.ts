import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import 'chartjs-adapter-date-fns'; // Importar el adaptador de fechas

@Component({
  selector: 'app-graphic',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.css']
})
export class GraphicComponent implements OnInit {

  chart: any;
  pieChart: any;

  constructor() {}

  ngOnInit() {
    // Gráfico de barras
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: ["2010-01-02", "2010-01-03", "2010-01-04", "2010-01-05", "2010-01-06", "2010-01-07"],
        datasets: [{
          label: 'Transactions',
          data: [
            { x: "2010-01-02", y: 16 },
            { x: "2010-01-03", y: 5 },
            { x: "2010-01-04", y: 5.5 },
            { x: "2010-01-05", y: 7 },
            { x: "2010-01-06", y: 7 },
            { x: "2010-01-07", y: 6.5 }
          ],
          backgroundColor: 'rgb(255, 99, 132)'
        }],
      },
      options: {
        scales: {
          y: { beginAtZero: true },
          x: {
            type: 'time',
            time: { unit: 'day' }
          }
        }
      },
    });

    // Gráfico de pie
    this.pieChart = new Chart('pieCanvas', {
      type: 'pie',
      data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
          label: 'Dataset 1',
          data: [50, 49, 1],
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
          tooltip: { enabled: true }
        }
      }
    });
  }


}
