import { Component, OnInit, Input } from '@angular/core';
import { TarjetaNMService } from '../tarjeta-nm.service';

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
  selector: 'app-tabla-nm',
  templateUrl: './tabla-nm.component.html',
  styleUrls: ['./tabla-nm.component.sass']
})
export class TablaNMComponent implements OnInit {
  @Input() dataSourceNew =  ELEMENT_DATA1;
  constructor(private TarjetaNMService: TarjetaNMService) { }

  displayedColumns: string[] = ['departamento', 'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre', 'total'];
  dataSourcePositivo = ELEMENT_DATA1;
  dataSourceNegativo = ELEMENT_DATA1;
  ngOnInit() {
    this.getAllTableData();
  }

  getAllTableData() {
    var filterTemp = new Array();
    var Positivos = new Array();
    var Negativos = new Array();
    var DeptArray = new Array();
    var cont = 0;
    this.TarjetaNMService.getAllTableData()
      .then(resultService => {
        resultService.forEach((element, index) => {

          if (resultService[index].cardBbeType == "Near Miss" ) {
            resultService[index].total = element.enero + element.febrero + element.marzo + element.abril + element.mayo + element.junio + element.julio + element.agosto + element.septiembre + element.octubre + element.noviembre + element.diciembre;
            filterTemp[cont] = resultService[index];   
            DeptArray[cont] = resultService[index].departamento;
            cont++;
          }

          
        });


        
        console.log(resultService);
        var uniqueItems = Array.from(new Set(DeptArray));
        console.log(uniqueItems);
        var sumEnero = new Array(), sumFebrero = new Array(), sumMarzo = new Array(), sumAbril = new Array(), sumMayo = new Array(), sumJunio = new Array(), sumJulio = new Array(), sumAgosto = new Array(), sumSeptiembre = new Array(), sumOctubre = new Array(), sumNoviembre = new Array(), sumDiciembre = new Array(), sumTotal = new Array(), sumPositivo = new Array(), sumNegativo = new Array();
        cont=0;
        var contt = 0;
        for(var item = 0; item < uniqueItems.length; item++){
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
          for(var result of filterTemp){
            if (result.departamento == uniqueItems[item]){
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
          Positivos[contt] = JSON.parse('{"departamento":"' + uniqueItems[item] + '", "enero":' + sumEnero[contt] + ', "febrero":' + sumFebrero[contt] + ', "marzo":' + sumMarzo[contt] + ', "abril":' + sumAbril[contt] + ', "mayo":' + sumMayo[contt] + ', "junio":' + sumJunio[contt] + ', "julio":' + sumJulio[contt] + ', "agosto":' + sumAgosto[contt] + ', "septiembre":' + sumSeptiembre[contt] + ', "octubre":' + sumOctubre[contt] + ', "noviembre":' + sumNoviembre[contt] + ', "diciembre":' + sumDiciembre[contt] + ', "total":' + sumTotal[contt] +'}');
          contt++;
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
          for (var result of filterTemp) {
            if (result.departamento == uniqueItems[item] && result.sucedio == "Asociado") {
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
          Positivos[contt] = JSON.parse('{"departamento":"Asociado", "enero":' + sumEnero[contt] + ', "febrero":' + sumFebrero[contt] + ', "marzo":' + sumMarzo[contt] + ', "abril":' + sumAbril[contt] + ', "mayo":' + sumMayo[contt] + ', "junio":' + sumJunio[contt] + ', "julio":' + sumJulio[contt] + ', "agosto":' + sumAgosto[contt] + ', "septiembre":' + sumSeptiembre[contt] + ', "octubre":' + sumOctubre[contt] + ', "noviembre":' + sumNoviembre[contt] + ', "diciembre":' + sumDiciembre[contt] + ', "total":' + sumTotal[contt] + '}');
          contt++;
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
          for (var result of filterTemp) {
            if (result.departamento == uniqueItems[item] && result.sucedio == "Contratista") {
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
          Positivos[contt] = JSON.parse('{"departamento":"Contratista", "enero":' + sumEnero[contt] + ', "febrero":' + sumFebrero[contt] + ', "marzo":' + sumMarzo[contt] + ', "abril":' + sumAbril[contt] + ', "mayo":' + sumMayo[contt] + ', "junio":' + sumJunio[contt] + ', "julio":' + sumJulio[contt] + ', "agosto":' + sumAgosto[contt] + ', "septiembre":' + sumSeptiembre[contt] + ', "octubre":' + sumOctubre[contt] + ', "noviembre":' + sumNoviembre[contt] + ', "diciembre":' + sumDiciembre[contt] + ', "total":' + sumTotal[contt] + '}');
          contt++;

        }
       



        this.dataSourcePositivo = Positivos; 
       
      }
      );
  }

  filtro(){
    this.TarjetaNMService.getAllTableData()
      .then(resultService => {
        resultService.forEach((element, index) => {
          console.log("segunos datos");
        });
      });
    
  }

}
