import { Component, OnDestroy, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { FinancialDataYearDS } from 'src/app/models/financialDataYearDS';
import { UserService } from '../services/user.service';

Chart.register(...registerables)

@Component({
  selector: 'app-user-financial-data',
  templateUrl: './user-financial-data.component.html',
  styleUrls: ['./user-financial-data.component.css']
})
export class UserFinancialDataComponent implements OnInit, OnDestroy {

  totalSpentChart!: Chart; 
  months: String[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  monthlySpend: number[];
  year: number;

  constructor(
    private userService: UserService) { }
  
  ngOnInit(): void {
    let date = new Date();
    this.year =  date.getFullYear();
    this.getTotalSpentDataForGraph();
  }

  ngOnDestroy(): void {
    this.totalSpentChart.destroy();
  }

  yearSelected() {
    console.log(this.year)
  }

  ////////////////// Spent graph
  getTotalSpentDataForGraph() {
    console.log(this.year)
    this.monthlySpend = [0,0,0,0,0,0,0,0,0,0,0,0];
    Promise.all([
      new Promise((resolve, reject) => {
        this.userService.getTotalSpentPerMonthForYear(this.year).subscribe((data) => {
          data.forEach((element : FinancialDataYearDS) => {
            if (element.month === 1) {
              this.monthlySpend[0] = element.price
            }
            if (element.month === 2) {
              this.monthlySpend[1] = element.price
            }
            if (element.month === 3) {
              this.monthlySpend[2] += element.price
            }
            if (element.month === 4) {
              this.monthlySpend[3] = element.price
            }
            if (element.month === 5) {
              this.monthlySpend[4] = element.price
            }
            if (element.month === 6) {
              this.monthlySpend[5] = element.price
            }
            if (element.month === 7) {
              this.monthlySpend[6] = element.price
            }
            if (element.month === 8) {
              this.monthlySpend[7] = element.price
            }
            if (element.month === 9) {
              this.monthlySpend[8] = element.price
            }
            if (element.month === 10) {
              this.monthlySpend[9] = element.price
            }
            if (element.month === 11) {
              this.monthlySpend[10] = element.price
            }
            if (element.month === 12) {
              this.monthlySpend[11] = element.price
            }
          },resolve(true)) 
        })
      })
    ]).then(() => this.buildTotalSpentGraph(this.months, this.monthlySpend))
  
  }

  ////////////////// Wasted graph
  getTotalWastedDataForGraph() {
    this.monthlySpend = [0,0,0,0,0,0,0,0,0,0,0,0]
    Promise.all([
      new Promise((resolve, reject) => {
        this.userService.getTotalWastedPerMonthForYear(this.year).subscribe((data) => {
          data.forEach((element : FinancialDataYearDS) => {
            if (element.month === 1) {
              this.monthlySpend[0] = element.price
            }
            if (element.month === 2) {
              this.monthlySpend[1] = element.price
            }
            if (element.month === 3) {
              this.monthlySpend[2] += element.price
            }
            if (element.month === 4) {
              this.monthlySpend[3] = element.price
            }
            if (element.month === 5) {
              this.monthlySpend[4] = element.price
            }
            if (element.month === 6) {
              this.monthlySpend[5] = element.price
            }
            if (element.month === 7) {
              this.monthlySpend[6] = element.price
            }
            if (element.month === 8) {
              this.monthlySpend[7] = element.price
            }
            if (element.month === 9) {
              this.monthlySpend[8] = element.price
            }
            if (element.month === 10) {
              this.monthlySpend[9] = element.price
            }
            if (element.month === 11) {
              this.monthlySpend[10] = element.price
            }
            if (element.month === 12) {
              this.monthlySpend[11] = element.price
            }
          },resolve(true)) 
        })
      })
    ]).then(() => this.buildTotalSpentGraph(this.months, this.monthlySpend))
  }

  ////////////////// Used graph
  getTotalUsedDataForGraph() {
    this.monthlySpend = [0,0,0,0,0,0,0,0,0,0,0,0]
    Promise.all([
      new Promise((resolve, reject) => {
        this.userService.getTotalUsedPerMonthForYear(this.year).subscribe((data) => {
          data.forEach((element : FinancialDataYearDS) => {
            if (element.month === 1) {
              this.monthlySpend[0] = element.price
            }
            if (element.month === 2) {
              this.monthlySpend[1] = element.price
            }
            if (element.month === 3) {
              this.monthlySpend[2] += element.price
            }
            if (element.month === 4) {
              this.monthlySpend[3] = element.price
            }
            if (element.month === 5) {
              this.monthlySpend[4] = element.price
            }
            if (element.month === 6) {
              this.monthlySpend[5] = element.price
            }
            if (element.month === 7) {
              this.monthlySpend[6] = element.price
            }
            if (element.month === 8) {
              this.monthlySpend[7] = element.price
            }
            if (element.month === 9) {
              this.monthlySpend[8] = element.price
            }
            if (element.month === 10) {
              this.monthlySpend[9] = element.price
            }
            if (element.month === 11) {
              this.monthlySpend[10] = element.price
            }
            if (element.month === 12) {
              this.monthlySpend[11] = element.price
            }
          },resolve(true)) 
        })
      })
    ]).then(() => this.buildTotalSpentGraph(this.months, this.monthlySpend))
  
  }


  ///////////////// Build graph
  buildTotalSpentGraph(months: String[], monthlySpend: number[]) {
    this.totalSpentChart = new Chart("totalSpentYearChart", {
      type: 'line',
      data: {
        labels: months,
        datasets: [{
          data: monthlySpend,
          backgroundColor: 'black',
          borderColor: 'black'
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
    this.totalSpentChart.destroy();
    this.getTotalWastedDataForGraph();
  }

  changeToSpentGraph(){
    this.totalSpentChart.destroy();
    this.getTotalSpentDataForGraph()
  }

  changeToUsedGraph(){
    this.totalSpentChart.destroy();
    this.getTotalUsedDataForGraph()
  }
}
