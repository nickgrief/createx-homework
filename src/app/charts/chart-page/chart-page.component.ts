import { Component, Input, OnInit } from '@angular/core';
import {
  ChartsLoaderService,
  OfficeChartData,
} from 'src/app/services/charts-loader.service';

@Component({
  selector: 'app-chart-page',
  templateUrl: './chart-page.component.html',
  styleUrls: ['./chart-page.component.scss'],
})
export class ChartPageComponent implements OnInit {
  @Input() page!: number;
  @Input() chartsNum!: number;
  @Input() sumChart!: boolean;
  chartsData!: [number, OfficeChartData][];
  sumChartData!: OfficeChartData;
  dataLoaded = false;
  sumDataLoaded = false;

  constructor(private data: ChartsLoaderService) {}

  ngOnInit(): void {
    this.data.getChartData().subscribe((data) => {
      this.chartsData = Array.from(data);
      this.dataLoaded = true;
    });
    this.data.getSumData().subscribe((data) => {
      this.sumChartData = data;
      this.sumDataLoaded = true;
    });
  }
}
