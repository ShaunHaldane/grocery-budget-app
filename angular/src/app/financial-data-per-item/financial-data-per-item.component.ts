import { Component, OnDestroy, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ItemService } from '../services/item.service';
import { TotalSpentPerItemDS } from 'src/models/totalSpentPerItemDS';

@Component({
  selector: 'app-financial-data-per-item',
  templateUrl: './financial-data-per-item.component.html',
  styleUrls: ['./financial-data-per-item.component.css']
})
export class FinancialDataPerItemComponent implements OnInit, OnDestroy {

  totalSpentPerItemChart!: Chart; 
  items: String[] = []
  prices: number[] = []
  
  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.getTotalSpentPerItemDataForGraph();
  }

  ngOnDestroy(): void {
    this.totalSpentPerItemChart.destroy();
  }
  
  ////////////////// Total spent graph
  getTotalSpentPerItemDataForGraph() {
    this.items = []
    this.prices = []
    Promise.all([
      new Promise((resolve, reject) => {
        this.itemService.getTotalSpentForAllItems().subscribe((data) => {
          data.forEach((element : TotalSpentPerItemDS) => {
            this.items.push(element.name)
            this.prices.push(element.price)
          },resolve(true)) 
        })
      })
    ]).then(() => this.buildTotalSpentGraph(this.items, this.prices))
  }
  
  ////////////////// Total wasted graph
  getTotalWastedPerItemDataForGraph() {
    this.items = []
    this.prices = []
    Promise.all([
      new Promise((resolve, reject) => {
        this.itemService.getTotalWastedForAllItems().subscribe((data) => {
          data.forEach((element : TotalSpentPerItemDS) => {
            this.items.push(element.name)
            this.prices.push(element.price)
          },resolve(true)) 
        })
      })
    ]).then(() => this.buildTotalSpentGraph(this.items, this.prices))
  }
  
  ////////////////// Total wasted graph
  getTotalUsedPerItemDataForGraph() {
    this.items = []
    this.prices = []
    Promise.all([
      new Promise((resolve, reject) => {
        this.itemService.getTotalUsedForAllItems().subscribe((data) => {
          data.forEach((element : TotalSpentPerItemDS) => {
            this.items.push(element.name)
            this.prices.push(element.price)
          },resolve(true)) 
        })
      })
    ]).then(() => this.buildTotalSpentGraph(this.items, this.prices))
  }
  
  
  ///////////////// Build graph
  buildTotalSpentGraph(items: String[], prices: number[]) {
    this.totalSpentPerItemChart = new Chart("totalSpentPerItemChart", {
      type: 'bar',
      data: {
        labels: items,
        datasets: [{
          data: prices,
          backgroundColor: 'grey',
          borderColor: 'black',
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  }
  
  
  changeToWastedGraph(){
    this.totalSpentPerItemChart.destroy();
    this.getTotalWastedPerItemDataForGraph();
  }

  changeToSpentGraph(){
    this.totalSpentPerItemChart.destroy();
    this.getTotalSpentPerItemDataForGraph()
  }

  changeToUsedGraph(){
    this.totalSpentPerItemChart.destroy();
    this.getTotalUsedPerItemDataForGraph()
  }

}
