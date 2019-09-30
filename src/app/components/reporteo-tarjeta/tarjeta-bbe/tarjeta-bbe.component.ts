// tslint:disable: variable-name
// tslint:disable: ban-types
// tslint:disable: no-var-keyword
// tslint:disable: no-string-literal
// tslint:disable: jsdoc-format
// tslint:disable: quotemark
// tslint:disable: object-literal-key-quotes
// tslint:disable: max-line-length
// tslint:disable: prefer-const
import { Component, OnInit, ViewEncapsulation, LOCALE_ID } from '@angular/core';
import { TarjetaBbeService } from '../../registro-tarjeta/tarjeta-bbe/tarjeta-bbe.service';
import { TarjetaBbeReporteoService } from './tarjeta-bbe.service'
import { TarjetaNMService } from "../tarjeta-near-miss/tarjeta-nm.service";
import { MaintenanceTypes, Departments } from '../../registro-tarjeta/registro-tarjeta.component';
import { Areas, Workstations, EmployeesWithNumber } from '../../registro-tarjeta/tarjeta-bbe/tarjeta-bbe.component';
import { NativeDateAdapter, DateAdapter } from '@angular/material';



import * as _moment from 'moment';
import { RegistroTarjetaService } from '../../registro-tarjeta/registro-tarjeta.service';
import { filter } from 'minimatch';
// import { default as _rollupMoment } from 'moment';
const moment = _moment;

export class CustomDateAdapter extends NativeDateAdapter {
  format(date: Date, displayFormat: Object): string {
    var formatString = 'YYYY';
    return moment(date).format(formatString);
  }
}

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
  selector: 'app-tarjeta-reporteo-bbe',
  templateUrl: './tarjeta-bbe.component.html',
  styleUrls: ['./tarjeta-bbe.component.sass'],
  encapsulation: ViewEncapsulation.None,
  providers: [TarjetaBbeService, {provide: DateAdapter, useClass: CustomDateAdapter}],
})
export class ReporteoTarjetaBbeComponent implements OnInit {

  constructor(private registroTarjetaService: RegistroTarjetaService, private tarjetaBbeService: TarjetaBbeService, private TarjetaNMService: TarjetaNMService, private tarjetaBbeReporteoService: TarjetaBbeReporteoService) {}

  displayedColumns: string[] = ['departamento', 'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre', 'total'];
  dataSourceFilter = ELEMENT_DATA1;
  dataSourceNegativos = ELEMENT_DATA1;
  dataSourcePositivos = ELEMENT_DATA1;
  filterValues = new Array();

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
    this.filterValues["Anio"] = "";
    this.filterValues["Lugar"] = "";
    this.filterValues["Departamento"] = "";
    this.filterValues["Area"] = "";
    this.filterValues["Workstation"] = "";
    this.filterValues["Observada"] = "";
    this.filterValues["Comportamiento"] = ""; 
    this.getMaintenanceTypes();
    this.getEmployeesWithNumber();
  }

  firstComponentFunction( anio,lugar,departamento,area,workstation,observada,comportamiento) {
    this.tarjetaBbeReporteoService.changeDataSource(anio,lugar,departamento,area,workstation,observada,comportamiento);
/*     this.tarjetaBbeReporteoService.changeDataSource(maintenanceType);
 */
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
    this.tarjetaBbeService.getEmployeesWithNumbers()
      .then(resultService => {
        this.employeesWithNumber = resultService;
      }
      );
  }

  onReportedPersonSelected(e) {
    this.observedPerson = e.value;
  }

  onPlaceSelected(e) {
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
    /* (document.querySelector('.circle-1-2') as HTMLElement).style.borderColor = '#26A63A';
    (document.querySelector('.circle-1-2') as HTMLElement).style.backgroundColor = '#26A63A'; */
    this.selectedCaseName = e.value.caseName;

    if (this.selectedCaseName == "CASE 1") {
      this.registroTarjetaService.getAreasByDeparment(e.value.departmentId, e.value.caseName)
        .then(resultService => {
          this.areas = resultService;
        }
        );
    } else {
      this.registroTarjetaService.getWorkstationsByDepartment(e.value.departmentId, e.value.caseName)
        .then(resultService => {
          this.workstations = resultService;
        }
        );
    }
  }

  onAreaSelected(e) {
    /* (document.querySelector('.circle-1-2') as HTMLElement).style.borderColor = '#26A63A';
    (document.querySelector('.circle-1-2') as HTMLElement).style.backgroundColor = '#26A63A'; */

    if (this.selectedCaseName == 'CASE 1') {
      this.tarjetaBbeService.getWorkstationsByArea(e.value.areaId, e.value.caseName)
        .then(resultService => {
          this.workstations = resultService;
        }
        );
    } else {
    }
  }

  onWorkstationSelected(e) {
    if (this.selectedCaseName == 'CASE 1') {
    } else {
      this.tarjetaBbeService.getAreasByWorkstation(e.value.workstationId, this.selectedCaseName)
        .then(resultService => {
          this.areas = resultService;
        }
        );
    }
  }
/*   filtro(event) {
    this.TarjetaNMService.getAllTableData()
      .then(resultService => {
        resultService.forEach((element, index) => {
          
        });
      });

  } */
  aplicarFiltro() {
    this.firstComponentFunction(this.filterValues["Anio"], this.filterValues["Lugar"], this.filterValues["Departamento"], this.filterValues["Area"], this.filterValues["Workstation"], this.filterValues["Observada"], this.filterValues["Comportamiento"]);
    /* this.TablaBbeComponent.changeDatasource(); */

    
  }
  
  filtroAnio(event){
    var anio = new Date(event);
    
    console.log(anio.getFullYear());
    if(event == null){
      this.filterValues["Anio"] = "";
    }else{
      this.filterValues["Anio"] = anio.getFullYear();
    }
    this.aplicarFiltro();
  }  
  
  
  filtroLugar(event){
    let target = event.source.selected._element.nativeElement;
    let selectedData = {
      value: event.value,
      text: target.innerText.trim()
    };
    console.log(selectedData);
    if(event == null){
      this.filterValues["Lugar"] = "";
    }else{
      this.filterValues["Lugar"] = selectedData.text;
    }
    this.aplicarFiltro();
  }  
  
  
  filtroDepartamento(event){
    let target = event.source.selected._element.nativeElement;
    let selectedData = {
      value: event.value,
      text: target.innerText.trim()
    };
    console.log(selectedData);
    if(event == null){
      this.filterValues["Departamento"] = "";
    }else{
      
      this.filterValues["Departamento"] = selectedData.text;
    }
    this.aplicarFiltro();
  }  
  
  
  filtroArea(event){
    let target = event.source.selected._element.nativeElement;
    let selectedData = {
      value: event.value,
      text: target.innerText.trim()
    };
    console.log(selectedData);
    if(event == null){
      this.filterValues["Area"] = "";
    }else{
      this.filterValues["Area"] = selectedData.text;
    }
    this.aplicarFiltro();
  }  
  
  
  filtroWorkstation(event){
    console.log(event);
   /*  let target = event.source.selected._element.nativeElement;
    let selectedData = {
      value: event.value,
      text: target.innerText.trim()
    };
    console.log(selectedData);
    if(event == null){
      this.filterValues["Workstation"] = "";
    }else{
      this.filterValues["Workstation"] = selectedData.text;
    }
    this.aplicarFiltro(); */
  }  
  
  
  filtroObservada(event){
    if(event == null){
      this.filterValues["Observada"] = "";
    }else{
      this.filterValues["Observada"] = event;
    }
    this.aplicarFiltro();
  } 
  
  filtroComportamiento(event) {
    if(event == null){
      this.filterValues["Comportamiento"] = "";
    }else{
      this.filterValues["Comportamiento"] = event;
    }
    this.aplicarFiltro();
  }  
  
  
}
