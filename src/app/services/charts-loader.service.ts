import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

interface RawData {
  src_office_id: number;
  office_name: string;
  dt_date: string;
  qty_orders: number;
  qty_new: number;
  qty_delivered: number;
  qty_return: number;
}

export interface OfficeChartDataset {
  label: string; // name of data
  data: string[];
  backgroundColor: "#003f5c" | "#7a5195" | "#ef5675" | "#ffa600"; // colors from https://www.learnui.design/tools/data-color-picker.html
}

export interface OfficeChartData {
  id: number;
  names: Set<string>;
  labels: string[]; // dates
  datasets: OfficeChartDataset[];
}

export interface SumChartData {
  labels: string[]; // dates
  datasets: OfficeChartDataset[];
}

@Injectable({
  providedIn: 'root'
})
export class ChartsLoaderService {

  private URL = 'assets/charts_data.json';
  private rawData$ = this.getRawData();

  private summarizeData(): Observable<Map<string, { orders: number; new: number; delivered: number; returned: number; }>> {
    return this.rawData$.pipe(map((data) => data.reduce((sum, datum) => {
      if (!sum.has(datum.dt_date)) {
        sum.set(datum.dt_date, {
          orders: datum.qty_orders,
          new: datum.qty_new,
          delivered: datum.qty_delivered,
          returned: datum.qty_return,
        })
      } else {
        let prev = sum.get(datum.dt_date)!;
        sum.set(datum.dt_date, {
          orders: prev.orders + datum.qty_orders,
          new: prev.new + datum.qty_new,
          delivered: prev.delivered + datum.qty_delivered,
          returned: prev.returned + datum.qty_return,
        })
      }
      return sum;
    }, new Map<string, {
      orders: number,
      new: number,
      delivered: number,
      returned: number,
    }>())));
  }

  public getSumData(): Observable<OfficeChartData> {
    return this.summarizeData().pipe(map((data) => Array.from(data).reduce((prev, curr) => {
      prev.labels.push(curr[0]);
      prev.datasets[0].data.push(String(curr[1].orders));
      prev.datasets[1].data.push(String(curr[1].new));
      prev.datasets[2].data.push(String(curr[1].delivered));
      prev.datasets[3].data.push(String(curr[1].returned));
      return prev;
    }, <OfficeChartData>{
      id: -1,
      names: new Set().add("Sum of all offices"),
      labels: [] as string[],
      datasets: [<OfficeChartDataset>{
        label: "Orders",
        data: [],
        backgroundColor: "#003f5c",
        borderColor: "#003f5c",
      }, <OfficeChartDataset>{
        label: "New",
        data: [],
        backgroundColor: "#7a5195",
        borderColor: "#7a5195",
      }, <OfficeChartDataset>{
        label: "Delivered",
        data: [],
        backgroundColor: "#ef5675",
        borderColor: "#ef5675",
      }, <OfficeChartDataset>{
        label: "Returned",
        data: [],
        backgroundColor: "#ffa600",
        borderColor: "#ffa600",
      }]

    })))
  }

  public getChartData(): Observable<Map<number, OfficeChartData>> {
    return this.rawData$.pipe(map((data) => data.reduce((prev, curr) => {
      if (!prev.has(curr.src_office_id)) {
        prev.set(curr.src_office_id, <OfficeChartData>{
          id: curr.src_office_id,
          labels: [curr.dt_date],
          names: new Set<string>().add(curr.office_name),
          datasets: [<OfficeChartDataset>{
            label: "Orders",
            data: [String(curr.qty_orders)],
            backgroundColor: "#003f5c",
            borderColor: "#003f5c",
          }, <OfficeChartDataset>{
            label: "New",
            data: [String(curr.qty_new)],
            backgroundColor: "#7a5195",
            borderColor: "#7a5195",
          }, <OfficeChartDataset>{
            label: "Delivered",
            data: [String(curr.qty_delivered)],
            backgroundColor: "#ef5675",
            borderColor: "#ef5675",
          }, <OfficeChartDataset>{
            label: "Returned",
            data: [String(curr.qty_return)],
            backgroundColor: "#ffa600",
            borderColor: "#ffa600",
          }]
        });
      } else {
        let previousData = prev.get(curr.src_office_id)!;
        prev.set(curr.src_office_id, <OfficeChartData>{
          id: curr.src_office_id,
          labels: [...previousData.labels, curr.dt_date],
          names: previousData.names.add(curr.office_name),
          datasets: [<OfficeChartDataset>{
            label: previousData.datasets[0].label,
            data: [...previousData.datasets[0].data, String(curr.qty_orders)],
            backgroundColor: previousData.datasets[0].backgroundColor,
            borderColor: previousData.datasets[0].backgroundColor,
          }, <OfficeChartDataset>{
            label: previousData.datasets[1].label,
            data: [...previousData.datasets[1].data, String(curr.qty_new)],
            backgroundColor: previousData.datasets[1].backgroundColor,
            borderColor: previousData.datasets[1].backgroundColor,
          }, <OfficeChartDataset>{
            label: previousData.datasets[2].label,
            data: [...previousData.datasets[2].data, String(curr.qty_delivered)],
            backgroundColor: previousData.datasets[2].backgroundColor,
            borderColor: previousData.datasets[2].backgroundColor,
          }, <OfficeChartDataset>{
            label: previousData.datasets[3].label,
            data: [...previousData.datasets[3].data, String(curr.qty_return)],
            backgroundColor: previousData.datasets[3].backgroundColor,
            borderColor: previousData.datasets[3].backgroundColor,
          }]
        });
      }
      return prev;
    }, new Map<number, OfficeChartData>())))
  }

  private getRawData(): Observable<RawData[]> {
    return this.http.get<RawData[]>(this.URL)
  }

  constructor(private http: HttpClient) {
  }
}
