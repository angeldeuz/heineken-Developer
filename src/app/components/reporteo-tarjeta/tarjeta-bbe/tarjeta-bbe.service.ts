import { Injectable, EventEmitter } from '@angular/core';
import axios from 'axios';
import { TableRow } from './tabla-bbe/tabla-bbe.component';
import { ChartData } from './grafica-bbe/grafica-bbe.component';
import { Subscription } from 'rxjs/internal/Subscription';


@Injectable({
  providedIn: 'root'
})
export class TarjetaBbeReporteoService {
  invokeFirstComponentFunction = new EventEmitter();
  subsVar: Subscription;  
  constructor() { }

  /* Declaraciones */
  /*url = 'http://ec2-174-129-57-180.compute-1.amazonaws.com/ITCOM';*/
  url = 'https://greencardweb20190907024801.azurewebsites.net';
        
  public changeDataSource(anio, lugar, departamento, area, workstation, observada, comportamiento) {
    this.invokeFirstComponentFunction.emit([anio, lugar, departamento, area, workstation, observada, comportamiento]);
  } 

  public getAllTableData() {
    return axios.get<TableRow>(this.url + '/api/CardsBbe/ReporterList')
      .then(function (response) {
        // handle success
        return response.data;
      })
      .catch(function (error) {
        // handle error
        console.log('------ GET:ERROR ----- axios error at /api/CardsBbe/ReporterList--');
        console.log(error);
        return error;
      })
      .finally(function () {
        // always executed
        return console.log('----- GET:FINALLY ----- axios end at /api/CardsBbe/ReporterList--');
      });
  }

  public getAllChartData() {
    return axios.get<ChartData>(this.url + '/api/CardsBbe/ReporterList')
      .then(function (response) {
        // handle success
        return response.data;
      })
      .catch(function (error) {
        // handle error
        console.log('------ GET:ERROR ----- axios error at /api/CardsBbe/ReporterList--');
        console.log(error);
        return error;
      })
      .finally(function () {
        // always executed
        return console.log('----- GET:FINALLY ----- axios end at /api/CardsBbe/ReporterList--');
      });
  }

}
