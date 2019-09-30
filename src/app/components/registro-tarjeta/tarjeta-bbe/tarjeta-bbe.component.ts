import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { TarjetaBbeService } from './tarjeta-bbe.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';


export interface EmployeesWithNumber {
    id: number;
    name: string;
    employeeNumber: number;
}

export interface Areas {
  id: number;
  name: string;
  sap: string;
  caseName: string;
  departmentId: number;
  areaId: number;
}

export interface Workstations {
  id: number;
  caseName: string;
  sap: string;
  name: string;
  managerEmployeeID: string;
  coordinatorEmployeeId: string;
  chiefEmployeeId: string;
  workstationId: number;
  departmentId: number;
}

export interface Machines {
  id: number;
  areaId: number;
  area: string;
  sap: string;
  name: string;
}

export interface Systems {
  id: number;
  machineId: number;
  sap: string;
  name: string;
}

export interface Positions {
  id: number;
  internalName: string;
  displayName: string;
}

// tslint:disable: no-string-literal
// tslint:disable: jsdoc-format
// tslint:disable: quotemark
// tslint:disable: object-literal-key-quotes
// tslint:disable: max-line-length
// tslint:disable: prefer-const

@Component({
  selector: 'app-tarjeta-bbe',
  templateUrl: './tarjeta-bbe.component.html',
  styleUrls: ['./tarjeta-bbe.component.sass'],
  encapsulation: ViewEncapsulation.None,
  providers:  [ TarjetaBbeService ],
})
export class TarjetaBBEComponent implements OnInit {
  /* Recepción de array del padre */
  @Input() selectedValues: Array<any>[];
  @Input() recibedAreas: Areas;
  @Input() recibedWorkstations: Workstations;
  @Input() cardTypeSelected: string;
  @Input() placeSelected: string;
  @Input() departmentSelected: string;
  @Input() selectedCaseName: string;

  /* Declaraciones */
  dateSelected: string = '';
  timeSelected: string = '';
  oberverSelected: string = '';
  systemSelected: string = '';
  eventDescription: string = '';
  areas: Areas;
  allAreas: Areas;
  employeesWithNumber: EmployeesWithNumber;
  workstations: Workstations;
  machines: Machines;
  systems: Systems;
  positions: Positions;
  reportedPerson: string;
  workstationSelected: string;
  machineSelected: string;

  areaSelected: string;
  observedTypeSelected: string = 'Socio';
  employeeSelected: string = '';
  contractorNameSelected: string = '';
  observedContractorRoleSelected: string = '';
  observedEmployeeRoleIdSelected: string = '';
  observedAreaIdSelected: string = '';
  eventPlaceDescriptionSelected: string = '';
  postiveFeedbackSelected: string = '';
  riskPreventionDescriptionSelected: string = '';
  riskCompromiseDescriptionSelected: string = '';
  opt1: string = '1';
  opt2: string = '1';
  opt3: string = '1';
  opt4: string = '1';
  opt5: string = '1';
  opt6: string = '1';
  opt7: string = '1';
  reasonOtherDescription: string;
  reasonDoneQuick: string;
  reasonMisKnowledge: string;
  reasonOther: string;
  reasonMissTraining: string;
  reasonMissMaterial: string;
  reasonUnclearRuling: string;
  reasonDisinterest: string;
  reasonDistraction: string;
  otroCheckbox: boolean;
  colBreakpoint1: number;
  rowBreakpoint1: string;
  rowBreakpoint2: string;
  rowBreakpoint3: string;
  rowBreakpoint4: string;
  rowBreakpoint5: string;
  colBreakpoint5: number;
  rowBreakpoint6: string;
  rowBreakpoint7: string;
  rowBreakpoint8: string;
  constructor( private tarjetaBbeService: TarjetaBbeService, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer ) {
    this.matIconRegistry.addSvgIcon(
      'calentar_input_icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/imagenes/icon_calendar_green.svg')
    );
  }

  ngOnInit() {
    /*
    * Este servicio se llama al incio para traer las opciones de Lugar
    */
    this.getEmployeesWithNumber();
    this.getPositions();
    this.getAllAreas();
    this.colBreakpoint1 = (window.innerWidth <= 890) ? 1 : 4;
    this.rowBreakpoint1 = (window.innerWidth <= 890) ? "1:0.25" : "1:0.35";
    this.rowBreakpoint2 = (window.innerWidth <= 890) ? "1:1.20" : "1:0.45";
    this.rowBreakpoint3 = (window.innerWidth <= 890) ? "1:0.30" : "1:0.01";
    this.rowBreakpoint4 = (window.innerWidth <= 890) ? "1:1.80" : "1:0.61";
    this.rowBreakpoint5 = (window.innerWidth <= 890) ? "1:0.35" : "2:0.40";
    this.colBreakpoint5 = (window.innerWidth <= 890) ? 1 : 2;
    this.rowBreakpoint6 = (window.innerWidth <= 890) ? "1:0.25" : "1:1.01";
    this.rowBreakpoint7 = (window.innerWidth <= 890) ? "1:0.35" : "1:1.01";
    this.rowBreakpoint8 = (window.innerWidth <= 890) ? "1:0.25" : "1:0.15";
  }

  onResize(event) {
    this.colBreakpoint1 = (event.target.innerWidth <= 890) ? 1 : 4;
    this.rowBreakpoint1 = (event.target.innerWidth <= 890) ? "1:0.25" : "1:0.35";
    this.rowBreakpoint2 = (event.target.innerWidth <= 890) ? "1:1.20" : "1:0.45";
    this.rowBreakpoint3 = (event.target.innerWidth <= 890) ? "1:0.30" : "1:0.01";
    this.rowBreakpoint4 = (event.target.innerWidth <= 890) ? "1:1.80" : "1:0.61";
    this.rowBreakpoint5 = (event.target.innerWidth <= 890) ? "1:0.35" : "2:0.40";
    this.colBreakpoint5 = (event.target.innerWidth <= 890) ? 1 : 2;
    this.rowBreakpoint6 = (event.target.innerWidth <= 890) ? "1:0.25" : "1:1.01";
    this.rowBreakpoint7 = (event.target.innerWidth <= 890) ? "1:0.35" : "1:1.01";
    this.rowBreakpoint8 = (event.target.innerWidth <= 890) ? "1:0.25" : "1:0.15";
  }

  getEmployeesWithNumber(){
    this.tarjetaBbeService.getEmployeesWithNumbers()
      .then(resultService =>{
        this.employeesWithNumber = resultService;
      }
    );
  }

  getPositions(){
    this.tarjetaBbeService.getPositions()
      .then(resultService =>{
        this.positions = resultService;
      }
    );
  }

  getAllAreas(){
    this.tarjetaBbeService.getAllAreas()
      .then(resultService =>{
        this.allAreas = resultService;
      }
    );
  }

  onAreaSelected(e) {
    console.log('---- onAreaSelected ---');
    (document.querySelector('.circle-1-2') as HTMLElement).style.borderColor = '#26A63A';
    (document.querySelector('.circle-1-2') as HTMLElement).style.backgroundColor = '#26A63A';

    if(this.selectedCaseName == 'CASE 1'){
      console.log('PASO 3 '+this.selectedCaseName);
      console.log('!!!!!!!!!!!! CASE 1 !!!!!!!!!! areaSelected: ' + e.value.areaId);
      this.tarjetaBbeService.getWorkstationsByArea(e.value.areaId, e.value.caseName)
        .then(resultService =>{
          this.workstations = resultService;
          console.log('Workstations: ');
          console.log(this.workstations);
        }
      );
    }else{
      console.log('!!!!!!!!!!!! CASE 2 !!!!!!!!!! workstationSelected: ' + e.value.areaId);
      console.log('PASO 4 '+this.selectedCaseName);
      this.tarjetaBbeService.getMachinesByArea(e.value.areaId)
        .then(resultService =>{
          this.machines = resultService;
          console.log('MachinesByArea: ');
          console.log(this.machines);
        }
      );
    }
  }

  onWorkstationSelected(e) {
    console.log('---- onWorkStationSelected ---');
    console.log('PASO 4 CASO 1');
    console.log('workstationSelected: ' + e.value.workstationId);
    if(this.selectedCaseName == 'CASE 1'){
      console.log('!!!!!!!!!!!! CASE 1 !!!!!!!!!!');
      this.tarjetaBbeService.getMachinesByWorkstation(e.value.workstationId)
        .then(resultService =>{
          this.machines = resultService;
          console.log('MachinesByWorkstation: ');
          console.log(this.machines);
        }
      );
    } else {
      console.log('!!!!!!!!!!!! onWorkstationSelected:CASE 2 !!!!!!!!!!');
      console.log(e);
      this.tarjetaBbeService.getAreasByWorkstation(e.value.workstationId, this.selectedCaseName)
        .then(resultService =>{
          this.areas = resultService;
          console.log('AreasByWorkstation: ');
          console.log(this.areas);
        }
      );
    }
  }

  onMachineSelected(e) {
    console.log('---- onMachineSelected ---');
    console.log('PASO 5');
    this.tarjetaBbeService.getSystemByMachineId(e.value.machineId)
      .then(resultService =>{
        this.systems = resultService;
        console.log('Systems: ');
        console.log(this.systems);
      }
    );
  }

  onSystemSelected(e) {
    console.log('---- onSystemSelected ---');
    console.log('PASO 6');
  }

  onReportedPersonSelected(e) {
    console.log('---- onReportedPersonSelected ---');
    this.reportedPerson = e.value;
  }

  onObservedtypeChange(e) {
    console.log("------------ onObservedtypeChange ------------- ");
    console.log(e);
    if (e.value === "Contratista") {
      this.employeeSelected = "0";
      this.observedEmployeeRoleIdSelected = "0";
      this.observedAreaIdSelected = "0";
    } else if (e.value === "Socio") {
      this.contractorNameSelected = "N/A";
      this.observedContractorRoleSelected = "N/A";
      this.eventPlaceDescriptionSelected = "N/A";
    } else {
      this.employeeSelected = "0";
      this.observedEmployeeRoleIdSelected = "0";
      this.observedAreaIdSelected = "0";
      this.contractorNameSelected = "N/A";
      this.observedContractorRoleSelected = "N/A";
      this.eventPlaceDescriptionSelected = "N/A";
    }
  }

  onClickSaveBBE() {
    let filledCard = {
      "MaintenanceTypeId": this.placeSelected.toString(), /* Lugar*/
      "DepartmentId": this.departmentSelected['departmentId'].toString(), /* Departamento */
      "SelectedDatetime": this.dateSelected + " " + this.timeSelected + ":00.000", /* Fecha compuesta por los campos del formulario */
      "ObserverEmployeeId": this.oberverSelected.toString(), /* Empleado que reporta */
      "AreaId": this.areaSelected['areaId'].toString(), /* Área */
      "WorkstationId": this.workstationSelected['workstationId'].toString(), /* Workstation */
      "MachineId": this.machineSelected['machineId'].toString(), /* Maquina */
      "SystemId": this.systemSelected['systemId'].toString(), /* Sistema */
      "Description": this.eventDescription || "N/A", /* Descripción */
      "RequestWasteAdvice": this.opt1, /* Solicitar asesorías para disposición de residuos */
      "WorkAreaWithoutWaste": this.opt2, /* Área de trabajo sin acumulación de residuos */
      "CorrectIdentificationContainers": this.opt3, /* Correcta identificación de contenedores para residuos */
      "AdequateSegmentationWaste": this.opt4, /* Segmentación adecuada de residuos en el área de trabajo */
      "CorrectIdentificationStorageProducts": this.opt5, /* Correcta identificación y almacenamiento de productos químicos: */
      "ControlledDownloadNotice": this.opt6, /* Descarga controlada y/o con previo aviso a drenaje (químicos neutralizados, compuestos cancerigenos, levaura: */
      "ResponsibleEnergyConsumption": this.opt7, /* Consumo responsable de energeticos (Agua, Electricidad, Térmico): */
      "BbeObservedType": this.observedTypeSelected, /*  Socio o Contratista */
      "ObservedEmployeeId": this.employeeSelected.toString() || "0", /*  EmployeerId, NOTA: si es que seleccionaron Socio, de lo contrario poner 0 */
      "ObservedEmployeeRoleId": this.observedEmployeeRoleIdSelected.toString() || "0", /*  RoleId, NOTA: si es que seleccionaron Socio, de lo contrario poner 0 */
      "ObservedAreaId": this.observedAreaIdSelected.toString() || "0", /*  AreaId, NOTA: si es que seleccionaron Socio, de lo contrario poner 0 */
      "ObservedContractorName": this.contractorNameSelected || "N/A", /* Nombre del contratista, NOTA: si es que seleccionaron Contratista de lo contrario poner N/A */
      "ObservedContractorRole": this.observedContractorRoleSelected || "N/A", /* Rol o Descripcion de posición del contratista, NOTA: si es que seleccionaron Contratista de lo contrario poner N/A */
      "EventPlaceDescription": this.eventPlaceDescriptionSelected || "N/A", /*  Area breve unidad organizativa o Area, NOTA: si es que seleccionaron Contratista de lo contrario poner N/A*/
      "RiskPreventionDescription": this.riskPreventionDescriptionSelected || "N/A", /* Retroalimentacion Crrectiva - ¿Cómo previenes este riesgo(s)? (Al haber seleccionado algo negativo enlos comportamientos) */
      "RiskCompromiseDescription": this.riskCompromiseDescriptionSelected || "N/A", /* Retroalimentacion Crrectiva - ¿Qué compromiso especifico genera? (Al haber seleccionado algo negativo en los comportamientos) */
      "ReasonDistraction": this.reasonDistraction ? "1" : "0", /* Retroalimentacion Crrectiva - Distracción [1 || 0] 1:Check 0:Uncheck (Al haber seleccionado algo negativo en los comportamientos)*/
      "ReasonDisinterest": this.reasonDisinterest ? "1" : "0", /* Retroalimentacion Crrectiva - Desinteres [1 || 0] 1:Check 0:Uncheck (Al haber seleccionado algo negativo en los comportamientos) */
      "ReasonUnclearRuling": this.reasonUnclearRuling ? "1" : "0", /* Retroalimentacion Crrectiva - reglas poco claras [1 || 0] 1:Check 0:Uncheck (Al haber seleccionado algo negativo en los comportamientos) */
      "ReasonMissMaterial": this.reasonMissMaterial ? "1" : "0", /* Retroalimentacion Crrectiva - Falta de material [1 || 0] 1:Check 0:Uncheck (Al haber seleccionado algo negativo en los comportamientos) */
      "ReasonMissTraining": this.reasonMissTraining ? "1" : "0", /* Retroalimentacion Crrectiva - Falta de capacitación [1 || 0] 1:Check 0:Uncheck (Al haber seleccionado algo negativo en los comportamientos) */
      "ReasonOther": this.reasonOther ? "1" : "0", /* Retroalimentacion Crrectiva - Otro [1 || 0] 1:Check 0:Uncheck (Al haber seleccionado algo negativo en los comportamientos) */
      "ReasonMisKnowledge": this.reasonMisKnowledge ? "1" : "0", /* Retroalimentacion Crrectiva - Falta de conocimiento [1 || 0] 1:Check 0:Uncheck (Al haber seleccionado algo negativo en los comportamientos) */
      "ReasonDoneQuick": this.reasonDoneQuick ? "1" : "0", /* Retroalimentacion Crrectiva - Queria acabar rapido [1 || 0] 1:Check 0:Uncheck (Al haber seleccionado algo negativo en los comportamientos) */
      "ReasonOtherDescription": this.reasonOtherDescription || "N/A", /* Retroalimentacion Crrectiva - Otro [Texto] (Al haber seleccionado algo negativo en los comportamientos) */
      "PositiveFeedback": this.postiveFeedbackSelected || "N/A", /* Retroalimentacion Positiva */
      "ClosedDatetime": "2019-01-25 10:58:00.000", /* CloseDatetime hardcoed */
    };

    this.tarjetaBbeService.setBbeCard(filledCard)
      .then(resultService => {
        console.log('setBbeCard result: ');
        console.log(resultService);
        if (resultService == "Registro creado") {
          alert(resultService);
        }else{
          alert("Registro no creado");
        }
      }
      );
  }

}
