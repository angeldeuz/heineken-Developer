import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import {
  TarjetaBbeReporteoService
} from '../tarjeta-bbe.service';

export interface TableRow {
  id: string;
  year: string;
  comportamiento: string;
  lugar: string;
  departamento: string;
  area: string;
  workstation: string;
  sucedio: string;
  enero: string;
  febrero: string;
  marzo: string;
  abril: string;
  mayo: string;
  junio: string;
  julio: string;
  agosto: string;
  septiembre: string;
  octubre: string;
  noviembre: string;
  diciembre: string;
  total: string;
}

let ELEMENT_DATA1: TableRow[] = [];
@Component({
  selector: 'app-tabla-bbe',
  templateUrl: './tabla-bbe.component.html',
  styleUrls: ['./tabla-bbe.component.sass']
})
export class TablaBbeComponent implements OnInit {

  constructor(private tarjetaBbeService: TarjetaBbeReporteoService) { }

  displayedColumns: string[] = ['departamento', 'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre', 'total'];
  dataSourceNegativos = ELEMENT_DATA1;
  dataSourcePositivos = ELEMENT_DATA1;
  filterTemp = new Array();
  DeptArray = new Array();
  ngOnInit() {
    this.getAllTableData();
    if (this.tarjetaBbeService.subsVar == undefined) {
      this.tarjetaBbeService.subsVar = this.tarjetaBbeService.
        invokeFirstComponentFunction.subscribe((maintenanceType) => {
          this.changeDataSource(maintenanceType[0], maintenanceType[1], maintenanceType[2], maintenanceType[3], maintenanceType[4], maintenanceType[5], maintenanceType[6]);
        });
    }
  }

  getAllTableData() {

    var Positivos = new Array();
    var Negativos = new Array();
    var cont = 0;
    this.tarjetaBbeService.getAllTableData()
      .then(resultService => {
        resultService.forEach((element, index) => {

          if (resultService[index].cardBbeType == "Bbe") {
            resultService[index].total = element.enero + element.febrero + element.marzo + element.abril + element.mayo + element.junio + element.julio + element.agosto + element.septiembre + element.octubre + element.noviembre + element.diciembre;
            this.filterTemp[cont] = resultService[index];
            this.DeptArray[cont] = resultService[index].departamento;
            cont++;
          }


        });
        var uniqueItems = Array.from(new Set(this.DeptArray));
        var sumEnero = new Array(),
          sumFebrero = new Array(),
          sumMarzo = new Array(),
          sumAbril = new Array(),
          sumMayo = new Array(),
          sumJunio = new Array(),
          sumJulio = new Array(),
          sumAgosto = new Array(),
          sumSeptiembre = new Array(),
          sumOctubre = new Array(),
          sumNoviembre = new Array(),
          sumDiciembre = new Array(),
          sumTotal = new Array(),
          sumPositivo = new Array(),
          sumNegativo = new Array();
        cont = 0;
        var contt = 0;
        for (var item = 0; item < uniqueItems.length; item++) {
          sumEnero[contt] = 0;
          sumFebrero[contt] = 0;
          sumMarzo[contt] = 0;
          sumAbril[contt] = 0;
          sumMayo[contt] = 0;
          sumJunio[contt] = 0;
          sumJulio[contt] = 0;
          sumAgosto[contt] = 0;
          sumSeptiembre[contt] = 0;
          sumOctubre[contt] = 0;
          sumNoviembre[contt] = 0;
          sumDiciembre[contt] = 0;
          sumTotal[contt] = 0;
          sumPositivo[contt] = 0;
          sumNegativo[contt] = 0;
          for (var result of this.filterTemp) {
            if (result.departamento == uniqueItems[item] && result.comportamiento == "Positivo") {
              sumEnero[contt] = result.enero + parseInt(sumEnero[contt]);
              sumFebrero[contt] = result.febrero + parseInt(sumFebrero[contt]);
              sumMarzo[contt] = result.marzo + parseInt(sumMarzo[contt]);
              sumAbril[contt] = result.abril + parseInt(sumAbril[contt]);
              sumMayo[contt] = result.mayo + parseInt(sumMayo[contt]);
              sumJunio[contt] = result.junio + parseInt(sumJunio[contt]);
              sumJulio[contt] = result.julio + parseInt(sumJulio[contt]);
              sumAgosto[contt] = result.agosto + parseInt(sumAgosto[contt]);
              sumSeptiembre[contt] = result.septiembre + parseInt(sumSeptiembre[contt]);
              sumOctubre[contt] = result.octubre + parseInt(sumOctubre[contt]);
              sumNoviembre[contt] = result.noviembre + parseInt(sumNoviembre[contt]);
              sumDiciembre[contt] = result.diciembre + parseInt(sumDiciembre[contt]);
              sumTotal[contt] = result.enero + result.febrero + result.marzo + result.abril + result.mayo + result.junio + result.julio + result.agosto + result.septiembre + result.octubre + result.noviembre + result.diciembre + parseInt(sumTotal[contt]);
            }
          }
          Positivos[contt] = JSON.parse('{"departamento":"' + uniqueItems[item] + '", "enero":' + sumEnero[contt] + ', "febrero":' + sumFebrero[contt] + ', "marzo":' + sumMarzo[contt] + ', "abril":' + sumAbril[contt] + ', "mayo":' + sumMayo[contt] + ', "junio":' + sumJunio[contt] + ', "julio":' + sumJulio[contt] + ', "agosto":' + sumAgosto[contt] + ', "septiembre":' + sumSeptiembre[contt] + ', "octubre":' + sumOctubre[contt] + ', "noviembre":' + sumNoviembre[contt] + ', "diciembre":' + sumDiciembre[contt] + ', "total":' + sumTotal[contt] + '}');
          contt++;

        }
        cont = 0;
        var contt = 0;
        for (var item = 0; item < uniqueItems.length; item++) {
          sumEnero[contt] = 0;
          sumFebrero[contt] = 0;
          sumMarzo[contt] = 0;
          sumAbril[contt] = 0;
          sumMayo[contt] = 0;
          sumJunio[contt] = 0;
          sumJulio[contt] = 0;
          sumAgosto[contt] = 0;
          sumSeptiembre[contt] = 0;
          sumOctubre[contt] = 0;
          sumNoviembre[contt] = 0;
          sumDiciembre[contt] = 0;
          sumTotal[contt] = 0;
          sumPositivo[contt] = 0;
          sumNegativo[contt] = 0;
          for (var result of this.filterTemp) {
            if (result.departamento == uniqueItems[item] && result.comportamiento == "Negativo") {
              sumEnero[contt] = result.enero + parseInt(sumEnero[contt]);
              sumFebrero[contt] = result.febrero + parseInt(sumFebrero[contt]);
              sumMarzo[contt] = result.marzo + parseInt(sumMarzo[contt]);
              sumAbril[contt] = result.abril + parseInt(sumAbril[contt]);
              sumMayo[contt] = result.mayo + parseInt(sumMayo[contt]);
              sumJunio[contt] = result.junio + parseInt(sumJunio[contt]);
              sumJulio[contt] = result.julio + parseInt(sumJulio[contt]);
              sumAgosto[contt] = result.agosto + parseInt(sumAgosto[contt]);
              sumSeptiembre[contt] = result.septiembre + parseInt(sumSeptiembre[contt]);
              sumOctubre[contt] = result.octubre + parseInt(sumOctubre[contt]);
              sumNoviembre[contt] = result.noviembre + parseInt(sumNoviembre[contt]);
              sumDiciembre[contt] = result.diciembre + parseInt(sumDiciembre[contt]);
              sumTotal[contt] = result.enero + result.febrero + result.marzo + result.abril + result.mayo + result.junio + result.julio + result.agosto + result.septiembre + result.octubre + result.noviembre + result.diciembre + parseInt(sumTotal[contt]);
            }
          }
          Negativos[contt] = JSON.parse('{"departamento":"' + uniqueItems[item] + '", "enero":' + sumEnero[contt] + ', "febrero":' + sumFebrero[contt] + ', "marzo":' + sumMarzo[contt] + ', "abril":' + sumAbril[contt] + ', "mayo":' + sumMayo[contt] + ', "junio":' + sumJunio[contt] + ', "julio":' + sumJulio[contt] + ', "agosto":' + sumAgosto[contt] + ', "septiembre":' + sumSeptiembre[contt] + ', "octubre":' + sumOctubre[contt] + ', "noviembre":' + sumNoviembre[contt] + ', "diciembre":' + sumDiciembre[contt] + ', "total":' + sumTotal[contt] + '}');
          contt++;

        }


        this.dataSourcePositivos = Positivos;
        this.dataSourceNegativos = Negativos;
      });
  }
  changeDataSource(anio, lugar, departamento, area, workstation, observada, comportamiento) {
    console.log("_______________________________________________________________________________________");

    console.log(anio);
     console.log(lugar);
     console.log(departamento);
     console.log(area);
     console.log(workstation);
     console.log(observada);
     console.log(comportamiento);

     console.log("_______________________________________________________________________________________");
 /*    var cont = 0;

    this.tarjetaBbeService.getAllTableData()
      .then(resultService => {
        resultService.forEach((element, index) => {

          if (resultService[index].cardBbeType == "Bbe") {
            resultService[index].total = element.enero + element.febrero + element.marzo + element.abril + element.mayo + element.junio + element.julio + element.agosto + element.septiembre + element.octubre + element.noviembre + element.diciembre;
            this.filterTemp[cont] = resultService[index];
            this.DeptArray[cont] = resultService[index].departamento;
            cont++;
          }


        });

      }); */

  }

  AjustFormat() {
    var cont = 0;
    var uniqueItems = Array.from(new Set(this.DeptArray));
    var applyFiltro = this.filterTemp;
    var Positivos = new Array();
    var Negativos = new Array();

    var sumEnero = new Array(),
      sumFebrero = new Array(),
      sumMarzo = new Array(),
      sumAbril = new Array(),
      sumMayo = new Array(),
      sumJunio = new Array(),
      sumJulio = new Array(),
      sumAgosto = new Array(),
      sumSeptiembre = new Array(),
      sumOctubre = new Array(),
      sumNoviembre = new Array(),
      sumDiciembre = new Array(),
      sumTotal = new Array(),
      sumPositivo = new Array(),
      sumNegativo = new Array();
    cont = 0;
    var contt = 0;
    for (var item = 0; item < uniqueItems.length; item++) {
      sumEnero[contt] = 0;
      sumFebrero[contt] = 0;
      sumMarzo[contt] = 0;
      sumAbril[contt] = 0;
      sumMayo[contt] = 0;
      sumJunio[contt] = 0;
      sumJulio[contt] = 0;
      sumAgosto[contt] = 0;
      sumSeptiembre[contt] = 0;
      sumOctubre[contt] = 0;
      sumNoviembre[contt] = 0;
      sumDiciembre[contt] = 0;
      sumTotal[contt] = 0;
      sumPositivo[contt] = 0;
      sumNegativo[contt] = 0;
      for (var result of applyFiltro) {
        if (result.departamento == uniqueItems[item] && result.comportamiento == "Positivo") {
          sumEnero[contt] = result.enero + parseInt(sumEnero[contt]);
          sumFebrero[contt] = result.febrero + parseInt(sumFebrero[contt]);
          sumMarzo[contt] = result.marzo + parseInt(sumMarzo[contt]);
          sumAbril[contt] = result.abril + parseInt(sumAbril[contt]);
          sumMayo[contt] = result.mayo + parseInt(sumMayo[contt]);
          sumJunio[contt] = result.junio + parseInt(sumJunio[contt]);
          sumJulio[contt] = result.julio + parseInt(sumJulio[contt]);
          sumAgosto[contt] = result.agosto + parseInt(sumAgosto[contt]);
          sumSeptiembre[contt] = result.septiembre + parseInt(sumSeptiembre[contt]);
          sumOctubre[contt] = result.octubre + parseInt(sumOctubre[contt]);
          sumNoviembre[contt] = result.noviembre + parseInt(sumNoviembre[contt]);
          sumDiciembre[contt] = result.diciembre + parseInt(sumDiciembre[contt]);
          sumTotal[contt] = result.enero + result.febrero + result.marzo + result.abril + result.mayo + result.junio + result.julio + result.agosto + result.septiembre + result.octubre + result.noviembre + result.diciembre + parseInt(sumTotal[contt]);
        }
      }
      Positivos[contt] = JSON.parse('{"departamento":"' + uniqueItems[item] + '", "enero":' + sumEnero[contt] + ', "febrero":' + sumFebrero[contt] + ', "marzo":' + sumMarzo[contt] + ', "abril":' + sumAbril[contt] + ', "mayo":' + sumMayo[contt] + ', "junio":' + sumJunio[contt] + ', "julio":' + sumJulio[contt] + ', "agosto":' + sumAgosto[contt] + ', "septiembre":' + sumSeptiembre[contt] + ', "octubre":' + sumOctubre[contt] + ', "noviembre":' + sumNoviembre[contt] + ', "diciembre":' + sumDiciembre[contt] + ', "total":' + sumTotal[contt] + '}');
      contt++;

    }
    cont = 0;
    var contt = 0;
    for (var item = 0; item < uniqueItems.length; item++) {
      sumEnero[contt] = 0;
      sumFebrero[contt] = 0;
      sumMarzo[contt] = 0;
      sumAbril[contt] = 0;
      sumMayo[contt] = 0;
      sumJunio[contt] = 0;
      sumJulio[contt] = 0;
      sumAgosto[contt] = 0;
      sumSeptiembre[contt] = 0;
      sumOctubre[contt] = 0;
      sumNoviembre[contt] = 0;
      sumDiciembre[contt] = 0;
      sumTotal[contt] = 0;
      sumPositivo[contt] = 0;
      sumNegativo[contt] = 0;
      for (var result of applyFiltro) {
        if (result.departamento == uniqueItems[item] && result.comportamiento == "Negativo") {
          sumEnero[contt] = result.enero + parseInt(sumEnero[contt]);
          sumFebrero[contt] = result.febrero + parseInt(sumFebrero[contt]);
          sumMarzo[contt] = result.marzo + parseInt(sumMarzo[contt]);
          sumAbril[contt] = result.abril + parseInt(sumAbril[contt]);
          sumMayo[contt] = result.mayo + parseInt(sumMayo[contt]);
          sumJunio[contt] = result.junio + parseInt(sumJunio[contt]);
          sumJulio[contt] = result.julio + parseInt(sumJulio[contt]);
          sumAgosto[contt] = result.agosto + parseInt(sumAgosto[contt]);
          sumSeptiembre[contt] = result.septiembre + parseInt(sumSeptiembre[contt]);
          sumOctubre[contt] = result.octubre + parseInt(sumOctubre[contt]);
          sumNoviembre[contt] = result.noviembre + parseInt(sumNoviembre[contt]);
          sumDiciembre[contt] = result.diciembre + parseInt(sumDiciembre[contt]);
          sumTotal[contt] = result.enero + result.febrero + result.marzo + result.abril + result.mayo + result.junio + result.julio + result.agosto + result.septiembre + result.octubre + result.noviembre + result.diciembre + parseInt(sumTotal[contt]);
        }
      }
      Negativos[contt] = JSON.parse('{"departamento":"' + uniqueItems[item] + '", "enero":' + sumEnero[contt] + ', "febrero":' + sumFebrero[contt] + ', "marzo":' + sumMarzo[contt] + ', "abril":' + sumAbril[contt] + ', "mayo":' + sumMayo[contt] + ', "junio":' + sumJunio[contt] + ', "julio":' + sumJulio[contt] + ', "agosto":' + sumAgosto[contt] + ', "septiembre":' + sumSeptiembre[contt] + ', "octubre":' + sumOctubre[contt] + ', "noviembre":' + sumNoviembre[contt] + ', "diciembre":' + sumDiciembre[contt] + ', "total":' + sumTotal[contt] + '}');
      contt++;

    }

    this.dataSourcePositivos = Positivos;
    this.dataSourceNegativos = Negativos;
  }
}