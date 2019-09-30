import { Component, NgZone, ViewEncapsulation, OnInit } from '@angular/core';
import { TarjetaNMService } from '../tarjeta-nm.service';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

export interface ChartData {
  departamento: string;
  positivo: string;
  negativo: string;
}

@Component({
  selector: 'app-grafica-nm',
  templateUrl: './grafica-nm.component.html',
  styleUrls: ['./grafica-nm.component.sass'],
  encapsulation: ViewEncapsulation.None,
  })
export class GraficaNMComponent {
  private chart: am4charts.XYChart;


  constructor(private zone: NgZone, private TarjetaNMService: TarjetaNMService) { }


  ngAfterViewInit() {
    var grafica = new Array();

    var filterTemp = new Array();
    var DeptArray = new Array();
    var cont = 0;
    this.zone.runOutsideAngular(() => {
      this.TarjetaNMService.getAllTableData()
        .then(resultService => {
          resultService.forEach((element, index) => {

            if (resultService[index].cardBbeType == "Near Miss") {
              resultService[index].total = element.enero + element.febrero + element.marzo + element.abril + element.mayo + element.junio + element.julio + element.agosto + element.septiembre + element.octubre + element.noviembre + element.diciembre;
              filterTemp[cont] = resultService[index];
              DeptArray[cont] = resultService[index].departamento;
              cont++;
            }
          });

          console.log(resultService);
          var uniqueItems = Array.from(new Set(DeptArray));
          var sumPositivo = new Array(), sumNegativo = new Array();
          cont = 0;
          console.log(uniqueItems);
          for (var item = 0; item < uniqueItems.length; item++) {
            sumPositivo[cont] = 0;
            sumNegativo[cont] = 0;
            for (var result of filterTemp) {
              if (result.comportamiento == "Positivo" && result.departamento == uniqueItems[item]) {
                sumPositivo[cont] = sumPositivo[cont] + 1;
              } else if (result.comportamiento == "Negativo" && result.departamento == uniqueItems[item]) {
                sumNegativo[cont] = sumNegativo[cont] + 1;
              }
            }
            grafica[cont] = JSON.parse('{"departamento":"' + uniqueItems[item] + '","positivo":' + sumPositivo[cont] + ',"negativo":' + sumNegativo[cont] + '}');
            cont++;
          }
          let chart = am4core.create("chartdiv", am4charts.XYChart);


          chart.paddingRight = 20;

          let data = [];


          //chart.numberFormatter.numberFormat = "#.3'%'";
          chart.data = grafica;

          // Create axes
          let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
          categoryAxis.dataFields.category = "departamento";
          categoryAxis.renderer.grid.template.location = 0;
          categoryAxis.renderer.minGridDistance = 30;
          categoryAxis.title.text = "Comportamiento/Departamento";

          let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
          valueAxis.title.text = "";
          valueAxis.title.fontWeight = "800";

          // Create series
          let series = chart.series.push(new am4charts.ColumnSeries());
          series.dataFields.valueY = "positivo";
          series.dataFields.categoryX = "departamento";
          series.clustered = false;
          series.columns.template.width = am4core.percent(50);
          series.tooltipText = " {categoryX} Positivo: [bold]{valueY}[/]";
          series.width = 100;
          series.height = 100;
          series.align = "center";
          series.valign = "middle";
          series.strokeWidth = 0;
          series.fill = am4core.color("#215413");
          series.stroke = am4core.color("red");

          let series2 = chart.series.push(new am4charts.ColumnSeries());
          series2.dataFields.valueY = "negativo";
          series2.dataFields.categoryX = "departamento";
          series2.clustered = false;
          series2.columns.template.width = am4core.percent(30);
          series2.tooltipText = "{categoryX} Negativo: [bold]{valueY}[/]";
          series2.width = 100;
          series2.height = 100;
          series2.align = "center";
          series2.valign = "middle";
          series2.strokeWidth = 0;
          series2.fill = am4core.color("#ff8b00");
          series2.stroke = am4core.color("red");

          chart.cursor = new am4charts.XYCursor();
          chart.cursor.lineX.disabled = true;
          chart.cursor.lineY.disabled = false;
        });


    });
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
}

