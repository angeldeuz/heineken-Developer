import { Injectable } from '@angular/core';
import axios from 'axios';
import { Areas, Workstations, Machines, Systems, Positions, EmployeesWithNumber } from './tarjeta-bbe.component';

@Injectable({
  providedIn: 'root'
})
export class TarjetaBbeService {

  constructor() { }
  /* Declaraciones */
  /*url = 'http://ec2-174-129-57-180.compute-1.amazonaws.com/ITCOM';*/
  url = 'https://greencardweb20190907024801.azurewebsites.net';


  public getEmployeesWithNumbers() {
    return axios.get<EmployeesWithNumber>(this.url + '/api/Employers/List')
    .then(function(response) {
      // handle success
      return response.data;
    })
    .catch(function(error) {
      // handle error
      console.log('------ GET:ERROR ----- axios error at /api/Employers/List--');
      console.log(error);
      return error;
    })
    .finally(function() {
      // always executed
      return console.log('----- GET:FINALLY ----- axios end at /api/Employers/List--');
    });
  }

  public getPositions() {
    return axios.get<Positions>(this.url + '/api/EmployeeRoles/List')
    .then(function(response) {
      // handle success
      return response.data;
    })
    .catch(function(error) {
      // handle error
      console.log('------ GET:ERROR ----- axios error at /api/EmployeeRoles/List--');
      console.log(error);
      return error;
    })
    .finally(function() {
      // always executed
      return console.log('----- GET:FINALLY ----- axios end at /api/EmployeeRoles/List--');
    });
  }

  public getAllAreas() {
    return axios.get<Positions>(this.url + '/api/Areas/List')
    .then(function(response) {
      // handle success
      return response.data;
    })
    .catch(function(error) {
      // handle error
      console.log('------ GET:ERROR ----- axios error at /api/Areas/List--');
      console.log(error);
      return error;
    })
    .finally(function() {
      // always executed
      return console.log('----- GET:FINALLY ----- axios end at /api/Areas/List--');
    });
  }

  public getAreasByWorkstation(workStationId,caseName) {
    console.log('--- getAreasByWorkstation ---');
    let data = "{'IdSelected':'"+workStationId+"','CaseName':'"+caseName+"'}";
    return axios.post<Areas>(this.url + '/api/Cases/SelectSubCase',data,{headers:{
      'Content-Type':'application/json; charset=utf-8',
    }
    }).then(function(response) {
      // handle success
      console.log(response.data);
      return response.data;
    })
    .catch(function(error) {
      // handle error
      console.log('------ POST:ERROR ----- axios error at /api/Cases/SelectSubCase' + workStationId + '--');
      return error;
    })
    .finally(function() {
      // always executed
      return console.log('----- POST:FINALLY ----- axios end at /api/Cases/SelectSubCase' + workStationId + '--');
    });
  }

  public getWorkstationsByArea(areaId,caseName) {
    console.log('--- getWorkstationsByArea ---');
    let data = "{'IdSelected':'"+areaId+"','CaseName':'"+caseName+"'}";
    return axios.post<Workstations>(this.url + '/api/Cases/SelectSubCase', data, {headers: {
      'Content-Type': 'application/json; charset=utf-8',
    }
    }).then(function(response) {
      // handle success
      if (response.data.toString() != 'N/A') {
        console.log(response.data);
        return response.data;
      } else {
        return [{ id: 0, caseName: 'N/A', sap: 'N/A', name: 'N/A', managerEmployeeID: 'N/A', coordinatorEmployeeId: 'N/A', chiefEmployeeId: 'N/A', workstationId: 0, departmentId: 0, }] as Array<Workstations>;
      }
    })
    .catch(function(error) {
      // handle error
      console.log('------ POST:ERROR ----- axios error at /api/Cases/SelectSubCase' + areaId + '--');
      return error;
    })
    .finally(function() {
      // always executed
      return console.log('----- POST:FINALLY ----- axios end at /api/Cases/SelectSubCase' + areaId + '--');
    });
  }

  public getMachinesByWorkstation(workstationId) {
    console.log('--- getMachineCase1 ---');
    /* return axios.get<Machines>(this.url + '/api/Machines/ListByArea/'+workstationId,{headers:{ */
    return axios.get<Machines>(this.url + '/api/Machines/ListByWorkstation/'+workstationId,{headers:{
      'Content-Type':'application/json; charset=utf-8',
    }
    }).then(function(response) {
      // handle success
      console.log("getMachinesByWorkstation");
      console.log(response.data);
      if (response.data.toString() != 'N/A') {
        return response.data;
      } else {
        return [{ id: 0, areaId: 0, area: 'N/A', sap: 'N/A', name: 'N/A' }] as Array<Machines>;
      }
    })
    .catch(function(error) {
      // handle error
      console.log('------ GET:ERROR ----- axios error at /api/Machines/ListByWorkstation/' + workstationId + '--');
      return error;
    })
    .finally(function() {
      // always executed
      return console.log('----- GET:FINALLY ----- axios end at /api/Machines/ListByWorkstation/' + workstationId + '--');
    });
  }

  public getMachinesByArea(areaId) {
    console.log('--- getMachineCase2 ---');
    /* return axios.get<Machines>(this.url + '/api/Machines/ListByWorkstation/'+areaId,{headers:{ */
    return axios.get<Machines>(this.url + '/api/Machines/ListByArea/'+areaId,{headers:{
      'Content-Type': 'application/json; charset=utf-8',
    }
    }).then(function(response) {
      // handle success
      console.log("getMachinesByWorkstation");
      console.log(response.data);
      if (response.data.toString() != 'N/A') {
        return response.data;
      } else {
        return [{ id: 0, machineId: 0, sap: 'N/A', name: 'N/A' }] as Array<Systems>;
      }
    })
    .catch(function(error) {
      // handle error
      console.log('------ GET:ERROR ----- axios error at /api/Machines/ListByArea/' + areaId + '--');
      return error;
    })
    .finally(function() {
      // always executed
      return console.log('----- GET:FINALLY ----- axios end at /api/Machines/ListByArea/' + areaId + '--');
    });
  }

  public getSystemByMachineId(machineId) {
    console.log('--- getMachineCase1 ---');
    return axios.get<Systems>(this.url + '/api/Systems/ListBy/'+machineId,{headers:{
      'Content-Type':'application/json; charset=utf-8',
    }
    }).then(function(response) {
      // handle success
      console.log("SystemsByMachineId");
      console.log(response.data);
      if (response.data.toString() != 'N/A') {
        return response.data;
      } else {
        return [{ id: 0, machineId: 0, sap: 'N/A', name: 'N/A' }] as Array<Systems>;
      }
    })
    .catch(function(error) {
      // handle error
      console.log('------ GET:ERROR ----- axios error at /api/Systems/ListBy/' + machineId + '--');
      return error;
    })
    .finally(function() {
      // always executed
      return console.log('----- GET:FINALLY ----- axios end at /api/Systems/ListBy/' + machineId + '--');
    });
  }

  public setBbeCard(filledCard) {
    console.log('--- setBbeCard ---');
    console.log("----------- filledCard como lo recibo -------------");
    console.log(filledCard);
    let data = JSON.stringify(filledCard);
    console.log("----------- data con json stringify -------------");
    console.log(data);
    return axios.post(this.url + '/api/CardsBbe/AddCardBbe', data, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      }
    }).then(function (response) {
      // handle success
      console.log('------ POST:SUCCESS ----- axios error at /api/CardsBbe/AddCardBbe ----');
      console.log(response.data);
      return response.data;
    })
      .catch(function (error) {
        // handle error
        console.log('------ POST:ERROR ----- axios error at /api/CardsBbe/AddCardBbe ----');
        return error;
      })
      .finally(function () {
        // always executed
        return console.log('----- POST:FINALLY ----- axios end at /api/CardsBbe/AddCardBbe ----');
      });
  }

}
