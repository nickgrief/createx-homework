import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Chart, ChartOptions, ChartConfiguration } from 'chart.js/auto';
import { OfficeChartData } from 'src/app/services/charts-loader.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements AfterViewInit {

  @Input() chartData!: OfficeChartData;

  @ViewChild('myCanvas') myCanvas!: ElementRef;

  fullscreen = false;

  public chart!: Chart<"line", string[]>;

  createChart(chartData: OfficeChartData) {
    this.chart = new Chart(this.myCanvas.nativeElement, {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: chartData.labels,
        datasets: [...chartData.datasets],
      },

      options: {
        elements: {
          point: {
            pointStyle: "line",
          },
          line: {
            tension: 0.25,
          }
        }
      }
    });
  }

  chartConfig = <ChartConfiguration>{
    type: 'line',
    options: <ChartOptions>{
      color: "red",
    }
  }

  constructor() { }

  ngAfterViewInit(): void {
    this.createChart(this.chartData);
  }

}
