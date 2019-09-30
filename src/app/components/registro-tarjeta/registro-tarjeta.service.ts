import { Injectable } from '@angular/core';
import axios from 'axios';
import { MaintenanceTypes, Departments } from './registro-tarjeta.component';
import { Areas, Workstations } from './tarjeta-bbe/tarjeta-bbe.component';

@Injectable({
  providedIn: 'root'
})
export class RegistroTarjetaService {

  constructor() { }

  url = 'https://greencardweb20190907024801.azurewebsites.net';

  public getMaintenanceTypes() {
    console.log('--- MaintenanceTypes PASO 1 NO CASE ---');

    return axios.get<MaintenanceTypes>(this.url + '/api/MaintenanceTypes/List')
    .then(function(response) {
      // handle success
      return response.data;
    })
    .catch(function(error) {
      // handle error
      console.log('------ GET:ERROR ----- axios error at /api/MaintenanceTypes/List--');
      console.log(error);
      return error;
    })
    .finally(function() {
      // always executed
      return console.log('----- GET:FINALLY ----- axios end at /api/MaintenanceTypes/List--');
    });
  }

  public getDepartments(maintenanceId) {
    console.log('--- getDepartments PASO 2 NO CASE ---');

    return axios.get<Departments>(this.url + '/api/MaintenanceTypes/ListBy/' + maintenanceId)
    .then(function(response) {
      // handle success
      return response.data;
    })
    .catch(function(error) {
      // handle error
      console.log('------ GET:ERROR ----- axios error at /api/MaintenanceTypes/ListBy/' + maintenanceId + '--');
      return error;
    })
    .finally(function() {
      // always executed
      return console.log('----- GET:FINALLY ----- axios end at /api/MaintenanceTypes/ListBy/' + maintenanceId + '--');
    });
  }

  public getAreasByDeparment(departmentId,caseName) {
    console.log('--- getAreas PASO 3 CASE 1 ---');
    let data = "{'IdSelected':'"+departmentId+"','CaseName':'"+caseName+"'}";
    return axios.post<Areas>(this.url + '/api/Cases/SelectCase',data,{headers:{
      'Content-Type':'application/json; charset=utf-8',
    }
    }).then(function(response) {
      // handle success
      console.log(response.data);
      return response.data;
    })
    .catch(function(error) {
      // handle error
      console.log('------ POST:ERROR ----- axios error at /api/Cases/SelectCase' + departmentId + '--');
      return error;
    })
    .finally(function() {
      // always executed
      return console.log('----- POST:FINALLY ----- axios end at /api/Cases/SelectCase' + departmentId + '--');
    });
  }

  public getWorkstationsByDepartment(departmentId,caseName) {
    console.log('--- getWorkstations PASO 3 CASE 2 ---');
    let data = "{'IdSelected':'"+departmentId+"','CaseName':'"+caseName+"'}";
    return axios.post<Workstations>(this.url + '/api/Cases/SelectCase',data,{headers:{
      'Content-Type':'application/json; charset=utf-8',
    }
    }).then(function(response) {
      // handle success
      console.log(response.data);
      return response.data;
    })
    .catch(function(error) {
      // handle error
      console.log('------ POST:ERROR ----- axios error at /api/Cases/SelectCase' + departmentId + '--');
      return error;
    })
    .finally(function() {
      // always executed
      return console.log('----- POST:FINALLY ----- axios end at /api/Cases/SelectCase' + departmentId + '--');
    });
  }

}
