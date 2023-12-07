import { Component, OnInit } from '@angular/core';
import {Chart,registerables} from 'node_modules/chart.js'
import { ChartService } from 'src/app/services/chart.service';
Chart.register(...registerables);
@Component({
  selector: 'app-widgets-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  constructor(  private api : ChartService) { }
  chartData:any;

  labelData:any[]=[];
  realData:any[]=[];
  colorData:any[]=[];
  ngOnInit(): void {
    this.api.getChartInfo().subscribe(result => {
      this.chartData = result;
      if(this.chartData!=null){
        for(let i = 0; i < this.chartData.length; i++){
          console.log(this.chartData[i]);
          this.labelData.push(this.chartData[i].year);
          this.realData.push(this.chartData[i].amount);
          this.colorData.push(this.chartData[i].colorCode);
        }
        // this.renderChart(this.labelData,this.realData,this.colorData,"pie","pieChart");
        this.renderChart(this.labelData,this.realData,this.colorData,"bar","barChart");
        this.renderChart(this.labelData,this.realData,this.colorData,"line","lineChart");
      }
    });
  }

  renderChart(labelData:any,realData:any,colorData:any,type:any,id:any){

  const myChart = new Chart(id, {
    type: type,
    data: {
      labels: labelData,
      datasets: [{
        label: '# of Votes',
        data: realData,
        backgroundColor: colorData,
        borderColor: [
          'rgba(255, 99, 132, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
}
