import { Component, OnInit } from '@angular/core';
import { ChartsLoaderService } from '../services/charts-loader.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent implements OnInit {
  page = 0;
  chartsNum = 20;

  firstPage = true;
  lastPage = false;

  sumChart = false;

  maxPages!: number;

  previous() {
    if (this.page > 0) {
      this.page -= 1;
      this.lastPage = false;
    }
    if (this.page === 0) {
      this.firstPage = true;
    }
  }

  next() {
    if (this.page < this.maxPages - 1) {
      this.page += 1;
      this.firstPage = false;
    }
    if (this.page === this.maxPages - 1) {
      this.lastPage = true;
    }
  }

  showAllCharts() {
    this.sumChart = false;
  }

  showSumChart() {
    this.sumChart = true;
  }

  constructor(private data: ChartsLoaderService) { }

  ngOnInit(): void {
    this.data.getChartData().subscribe(data => {
      this.maxPages = Math.floor(data.size / this.chartsNum) + 1;
      if (this.maxPages === 1) {
        this.lastPage = true;
      }
    })
  }
}
