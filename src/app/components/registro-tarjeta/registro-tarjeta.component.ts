import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RegistroTarjetaService } from './registro-tarjeta.service';
import { Areas, Workstations } from './tarjeta-bbe/tarjeta-bbe.component';

export interface MaintenanceTypes {
  id: number;
  name: string;
  ​sap: string;
}
export interface Departments {
  id: number;
  sap: string;
  name: string;
  caseName: string;
  maintenanceTypeId: number;
}
// tslint:disable: no-string-literal
// tslint:disable: jsdoc-format
// tslint:disable: quotemark
@Component({
  selector: 'app-registro-tarjeta',
  templateUrl: './registro-tarjeta.component.html',
  styleUrls: ['./registro-tarjeta.component.sass'],
  encapsulation: ViewEncapsulation.None,
})

export class RegistroTarjetaComponent implements OnInit {
  /**
   * Declaraciones
   */
  maintenanceTypes: MaintenanceTypes;
  departments: Departments;
  areas: Areas;
  workstations: Workstations;
  cardTypeSelected: string = "1";
  placeSelected: string;
  departmentSelected: string;
  selectedCaseName: string;
  colBreakpoint: number;
  rowBreakpoint: string;
  constructor(private registroTarjetaService: RegistroTarjetaService) { }

  ngOnInit() {
    this.getMaintenanceTypes();
    this.colBreakpoint = (window.innerWidth <= 890) ? 1 : 2;
    this.rowBreakpoint = (window.innerWidth <= 890) ? "1:0.45" : "1:0.36";
  }

  onResize(event) {
    this.colBreakpoint = (event.target.innerWidth <= 890) ? 1 : 2;
    this.rowBreakpoint = (event.target.innerWidth <= 890) ? "1:0.45" : "1:0.36";
  }

  onCardTypeSelected(e) {
    this.cardTypeSelected = e.value;
    console.log("---- onCardTypeSelected --- "+this.cardTypeSelected);
  }

  getMaintenanceTypes(){
    this.registroTarjetaService.getMaintenanceTypes()
      .then(resultService =>{
        this.maintenanceTypes = resultService;
      }
    );
  }

  /**
    * Recibe el event para consultar el valor seleccionado en el input de Lugar
    * Ejecuta la petición al servicio de getDepartments enviando el idLugar para que me retorne los departamentos correspondinetes al Lugar
    */
   onPlaceSelected(e) {
    console.log("---- onPlaceSelected ---");
    console.log(this.placeSelected);
    console.log("PASO 1 NO CASE");
    (document.querySelector('.circle-1-1') as HTMLElement).style.borderColor = '#26A63A';
    (document.querySelector('.circle-1-1') as HTMLElement).style.backgroundColor = '#26A63A';

    this.placeSelected = e.value;
    this.registroTarjetaService.getDepartments(this.placeSelected)
      .then(resultService =>{
        this.departments = resultService;
      }
    );
  }

  onDepartmentSelected(e) {
    console.log("---- onDepartmentSelected ---");
    console.log(this.departmentSelected['departmentId']);
    console.log("PASO 2 NO CASE");
    (document.querySelector('.circle-1-2') as HTMLElement).style.borderColor = '#26A63A';
    (document.querySelector('.circle-1-2') as HTMLElement).style.backgroundColor = '#26A63A';
    this.selectedCaseName = e.value.caseName;

    console.log('selectedCaseName:'+this.selectedCaseName);
    if(this.selectedCaseName == "CASE 1"){
      this.registroTarjetaService.getAreasByDeparment(e.value.departmentId, e.value.caseName)
        .then(resultService =>{
          this.areas = resultService;
          console.log("AreasByDepartment: ");
          console.log(this.areas);
        }
      );
    }else{
      this.registroTarjetaService.getWorkstationsByDepartment(e.value.departmentId, e.value.caseName)
        .then(resultService => {
          this.workstations = resultService;
          console.log("WorkstationsByDepartment: ");
          console.log(this.workstations);
        }
      );
    }
  }

}
