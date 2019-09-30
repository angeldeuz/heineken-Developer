// tslint:disable: variable-name
// tslint:disable: ban-types
// tslint:disable: no-var-keyword
// tslint:disable: no-string-literal
// tslint:disable: jsdoc-format
// tslint:disable: quotemark
// tslint:disable: object-literal-key-quotes
// tslint:disable: max-line-length
// tslint:disable: prefer-const
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { TarjetaNMService } from './tarjeta-nm.service';
import { TarjetaBbeService } from '../../registro-tarjeta/tarjeta-bbe/tarjeta-bbe.service';
import { MaintenanceTypes, Departments } from '../../registro-tarjeta/registro-tarjeta.component';
import { Areas, Workstations, EmployeesWithNumber } from '../../registro-tarjeta/tarjeta-bbe/tarjeta-bbe.component';
import { NativeDateAdapter, DateAdapter } from '@angular/material';

import * as _moment from 'moment';
import { RegistroTarjetaService } from '../../registro-tarjeta/registro-tarjeta.service';
// import { default as _rollupMoment } from 'moment';
const moment = _moment;

export class CustomDateAdapter extends NativeDateAdapter {
  format(date: Date, displayFormat: Object): string {
    var formatString = 'YYYY';
    return moment(date).format(formatString);
  }
}

@Component({
  selector: 'app-tarjeta-reporteo-near-miss',
  templateUrl: './tarjeta-nm.component.html',
  styleUrls: ['./tarjeta-nm.component.sass'],
  encapsulation: ViewEncapsulation.None,
  providers: [TarjetaNMService, {provide: DateAdapter, useClass: CustomDateAdapter}],
})
export class ReporteoTarjetaNearMissComponent implements OnInit {
  @Input() dataSourceNew;
  constructor(private registroTarjetaService: RegistroTarjetaService, private TarjetaNMService: TarjetaNMService, private TarjetaBbeService: TarjetaBbeService) {}

  /* Declaraciones */
  maintenanceTypes: MaintenanceTypes;
  departments: Departments;
  areas: Areas;
  workstations: Workstations;
  yearSelected: string;
  placeSelected: string;
  departmentSelected: string;
  areaSelected: string;
  workstationSelected: string;
  observedPerson: string;
  typeConduct: string;
  selectedCaseName: string = 'CASE 1';
  employeesWithNumber: EmployeesWithNumber;

  ngOnInit() {
    /*
    * Este servicio se llama al incio para traer las opciones de Lugar
    */
    this.getMaintenanceTypes();
    this.getEmployeesWithNumber();
  }

  onResize(event) { }

  onYearSelected(e) {
    this.yearSelected = e;
  }



  getMaintenanceTypes() {
    this.registroTarjetaService.getMaintenanceTypes()
      .then(resultService => {
        this.maintenanceTypes = resultService;
      }
      );
  }

  getEmployeesWithNumber() {
    this.TarjetaBbeService.getEmployeesWithNumbers()
      .then(resultService => {
        this.employeesWithNumber = resultService;
      }
      );
  }

  onReportedPersonSelected(e) {
    console.log('---- onReportedPersonSelected ---');
    this.observedPerson = e.value;
  }

  onPlaceSelected(e) {
    console.log("---- onPlaceSelected ---");
    console.log(this.placeSelected);
    console.log("PASO 1 NO CASE");
    /* (document.querySelector('.circle-1-1') as HTMLElement).style.borderColor = '#26A63A';
    (document.querySelector('.circle-1-1') as HTMLElement).style.backgroundColor = '#26A63A'; */

    this.placeSelected = e.value;
    this.registroTarjetaService.getDepartments(this.placeSelected)
      .then(resultService => {
        this.departments = resultService;
      }
      );
  }

  onDepartmentSelected(e) {
    console.log("---- onDepartmentSelected ---");
    console.log(this.departmentSelected['departmentId']);
    console.log("PASO 2 NO CASE");
    /* (document.querySelector('.circle-1-2') as HTMLElement).style.borderColor = '#26A63A';
    (document.querySelector('.circle-1-2') as HTMLElement).style.backgroundColor = '#26A63A'; */
    this.selectedCaseName = e.value.caseName;

    console.log('selectedCaseName:' + this.selectedCaseName);
    if (this.selectedCaseName == "CASE 1") {
      this.registroTarjetaService.getAreasByDeparment(e.value.departmentId, e.value.caseName)
        .then(resultService => {
          this.areas = resultService;
          console.log("AreasByDepartment: ");
          console.log(this.areas);
        }
        );
    } else {
      this.registroTarjetaService.getWorkstationsByDepartment(e.value.departmentId, e.value.caseName)
        .then(resultService => {
          this.workstations = resultService;
          console.log("WorkstationsByDepartment: ");
          console.log(this.workstations);
        }
        );
    }
  }

  onAreaSelected(e) {
    console.log('---- onAreaSelected ---');
    /* (document.querySelector('.circle-1-2') as HTMLElement).style.borderColor = '#26A63A';
    (document.querySelector('.circle-1-2') as HTMLElement).style.backgroundColor = '#26A63A'; */

    if (this.selectedCaseName == 'CASE 1') {
      console.log('PASO 3 ' + this.selectedCaseName);
      console.log('!!!!!!!!!!!! CASE 1 !!!!!!!!!! areaSelected: ' + e.value.areaId);
      this.TarjetaBbeService.getWorkstationsByArea(e.value.areaId, e.value.caseName)
        .then(resultService => {
          this.workstations = resultService;
          console.log('Workstations: ');
          console.log(this.workstations);
        }
        );
    } else {
      console.log('!!!!!!!!!!!! CASE 2 !!!!!!!!!!');
      console.log('PASO 4 CASO 2');
      console.log('areaSelected: ' + e.value.areaId);
    }
  }

  onWorkstationSelected(e) {
    console.log('---- onWorkStationSelected ---');
    console.log('PASO 4 CASO 1');
    console.log('workstationSelected: ' + e.value.workstationId);
    if (this.selectedCaseName == 'CASE 1') {
      console.log('!!!!!!!!!!!! CASE 1 !!!!!!!!!!');
      console.log('PASO 4 CASO 1');
      console.log('workstationSelected: ' + e.value.workstationId);
    } else {
      console.log('!!!!!!!!!!!! onWorkstationSelected:CASE 2 !!!!!!!!!!');
      console.log(e);
      this.TarjetaBbeService.getAreasByWorkstation(e.value.workstationId, this.selectedCaseName)
        .then(resultService => {
          this.areas = resultService;
          console.log('AreasByWorkstation: ');
          console.log(this.areas);
        }
        );
    }
  }
  filtro() {
    this.TarjetaNMService.getAllTableData()
      .then(resultService => {
        resultService.forEach((element, index) => {
          console.log("segunos datos");
        });
      });
   
  }
}
