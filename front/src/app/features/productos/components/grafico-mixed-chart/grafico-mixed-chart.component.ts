import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';

interface Dataset {
  type: 'bar' | 'line';
  label: string;
  data: number[];
  backgroundColor?: string;
  borderColor?: string;
}

@Component({
  selector: 'app-grafico-mixed-chart',
  templateUrl: './grafico-mixed-chart.component.html',
  styleUrls: ['./grafico-mixed-chart.component.scss']
})
export class GraficoMixedChart implements AfterViewInit {

  @ViewChild('mixedChart') mixedChart!: ElementRef<HTMLCanvasElement>;
  mixedChartInstance!: Chart;

  @Input() labels: string[] = ['Encuesta'];
  @Input() datasets: Dataset[] = [];

  constructor() {}

  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart(): void {
    if (!this.datasets.length) return;

    this.mixedChartInstance = new Chart(this.mixedChart.nativeElement, {
      data: {
        labels: this.labels,
        datasets: this.datasets
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true }
        },
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  }
}
