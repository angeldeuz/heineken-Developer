import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TarjetaBbeService } from '../registro-tarjeta/tarjeta-bbe/tarjeta-bbe.service';
import {ExportacionTarjetaService} from './exportacion-tarjeta.service';
import { MaintenanceTypes, Departments } from '../registro-tarjeta/registro-tarjeta.component';
import { Areas, Workstations, EmployeesWithNumber } from '../registro-tarjeta/tarjeta-bbe/tarjeta-bbe.component';
import { RegistroTarjetaService } from '../registro-tarjeta/registro-tarjeta.service';
import { NativeDateAdapter, DateAdapter } from '@angular/material';
import { FiltroTarjetaService } from '../filtro-tarjeta/filtro-tarjeta.service';

import * as _moment from 'moment';
// import { default as _rollupMoment } from 'moment';
const moment = _moment;

export class CustomDateAdapter extends NativeDateAdapter {
  format(date: Date, displayFormat: Object): string {
    var formatString = 'DD-MMM-YYYY';
    return moment(date).format(formatString);
  }
}

@Component({
  selector: 'app-exportacion-tarjeta',
  templateUrl: './Exportacion-tarjeta.component.html',
  styleUrls: ['./Exportacion-tarjeta.component.sass'],
  encapsulation: ViewEncapsulation.None,
  providers: [TarjetaBbeService, { provide: DateAdapter, useClass: CustomDateAdapter }],
})


export class ExportacionTarjetaComponent implements OnInit {

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
  startSelected: string = '';
  endSelected: string = '';

  constructor(private registroTarjetaService: RegistroTarjetaService, private tarjetaBbeService: TarjetaBbeService, private exportacionTarjetaService: ExportacionTarjetaService, private filterCards: FiltroTarjetaService) { }

  ngOnInit() {
    this.getMaintenanceTypes();
  }

  exportAsXLSX(): void {
    this.filterCards.getCards()
      .then(resultService => {
        let momentStartDate = new Date(this.startSelected);
        let momentEndtDate = new Date(this.endSelected);
        let formattedStartDate = moment(momentStartDate).format("DD/MMM/YYYY");
        let formattedEndDate = moment(momentStartDate).format("DD/MMM/YYYY");
        this.exportacionTarjetaService.exportAsExcelFile(resultService, 'Exportación-Tarjetas-Verdes-' + formattedStartDate + '-' + formattedEndDate);
      });
  }

  getMaintenanceTypes() {
    this.registroTarjetaService.getMaintenanceTypes()
      .then(resultService => {
        this.maintenanceTypes = resultService;
      }
      );
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
      this.tarjetaBbeService.getWorkstationsByArea(e.value.areaId, e.value.caseName)
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
      this.tarjetaBbeService.getAreasByWorkstation(e.value.workstationId, this.selectedCaseName)
        .then(resultService => {
          this.areas = resultService;
          console.log('AreasByWorkstation: ');
          console.log(this.areas);
        }
        );
    }
  }
}
