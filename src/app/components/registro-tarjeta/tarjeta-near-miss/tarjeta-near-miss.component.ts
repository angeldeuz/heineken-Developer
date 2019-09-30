import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Areas, Workstations, EmployeesWithNumber } from '../tarjeta-bbe/tarjeta-bbe.component';
import { TarjetaBbeService } from '../tarjeta-bbe/tarjeta-bbe.service';
import { TarjetaNearMissService } from './tarjeta-near-miss.service';

export interface Antiquities {
  value: string;
  displayValue: string;
}

// tslint:disable: no-string-literal
// tslint:disable: jsdoc-format
// tslint:disable: quotemark
// tslint:disable: object-literal-key-quotes
// tslint:disable: max-line-length
// tslint:disable: prefer-const
// tslint:disable: whitespace
@Component({
  selector: 'app-tarjeta-near-miss',
  templateUrl: './tarjeta-near-miss.component.html',
  styleUrls: ['./tarjeta-near-miss.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class TarjetaNearMissComponent implements OnInit {
  /* Recepción de array del padre */
  @Input() selectedValues: Array<any>[];
  @Input() recibedAreas: Areas;
  @Input() recibedWorkstations: Workstations;
  @Input() cardTypeSelected: string;
  @Input() placeSelected: string;
  @Input() departmentSelected: string;
  @Input() selectedCaseName: string;

  antiquities: Antiquities[] = [
    {"value":"0","displayValue":"Menos de un año."},
    {"value":"1","displayValue":"1"},
    {"value":"2","displayValue":"2"},
    {"value":"3","displayValue":"3"},
    {"value":"4","displayValue":"4"},
    {"value":"5","displayValue":"5"},
    {"value":"6","displayValue":"6"},
    {"value":"7","displayValue":"7"},
    {"value":"8","displayValue":"8"},
    {"value":"9","displayValue":"9"},
    {"value":"10","displayValue":"10"},
    {"value":"11","displayValue":"11"},
    {"value":"12","displayValue":"12"},
    {"value":"13","displayValue":"13"},
    {"value":"14","displayValue":"14"},
    {"value":"15","displayValue":"15"},
    {"value":"16","displayValue":"16"},
    {"value":"17","displayValue":"17"},
    {"value":"18","displayValue":"18"},
    {"value":"19","displayValue":"19"},
    {"value":"20","displayValue":"20"},
    {"value":"21","displayValue":"21"},
    {"value":"22","displayValue":"22"},
    {"value":"23","displayValue":"23"},
    {"value":"24","displayValue":"24"},
    {"value":"25","displayValue":"25"},
    {"value":"26","displayValue":"26"},
    {"value":"27","displayValue":"27"},
    {"value":"28","displayValue":"28"},
    {"value":"29","displayValue":"29"},
    {"value":"30","displayValue":"30"},
    {"value":"31","displayValue":"31"},
    {"value":"32","displayValue":"32"},
    {"value":"33","displayValue":"33"},
    {"value":"34","displayValue":"34"},
    {"value":"35","displayValue":"35"},
    {"value":"36","displayValue":"36"},
    {"value":"37","displayValue":"37"},
    {"value":"38","displayValue":"38"},
    {"value":"39","displayValue":"39"},
    {"value":"40","displayValue":"40"},
  ];
  employeesWithNumber: EmployeesWithNumber;
  dateSelected: string;
  timeSelected: string;
  antiquitySelect: string = '';
  observerType: string = "Socio";
  observerEmployee: string;
  observerContractor: string;
  observerSelected: string = '';
  observedType: string = "Socio";
  observedEmployee: string;
  observedContractor: string;
  observedSelected: string = '';
  isNotifiedPerson: string;
  areas: Areas;
  areaSelected: string;
  workstationSelected: string;
  machineSelected: string;
  eventDescription: string = '';
  workstations: string;
  machines: string;
  otroCheckbox: string;
  otroCheckbox2: string;
  nearMissTypeSelected: string = '';
  quicklyActionSelected: string = '';
  dailyCommentSelected: string;
  addInPyramidSelected: string;

  chemicalSpill: string;
  badQualifiedWaste: string;
  dischargingUncontrolled: string;
  miskNowledge: string;
  leak: string;
  distraction: string;
  incompatibilityChemical: string;
  badExecutionActivity: string;
  vehiclesContaminantsPresence: string;
  standardMiss: string;
  otherReasonNS: string;
  otherReasonNSDescription: string;

  soilPollution: string;
  atmospherePollution: string;
  waterPollution: string;
  affectationFloraFauna: string;
  otherImpactReason: string;
  otherImpactReasonDescription: string;
  colBreakpoint1: number;
  rowBreakpoint1: string;
  constructor(private tarjetaBbeService: TarjetaBbeService, private tarjetaNMService: TarjetaNearMissService ) { }

  ngOnInit() {
    this.getEmployeesWithNumber();
    this.colBreakpoint1 = (window.innerWidth <= 890) ? 1 : 4;
    this.rowBreakpoint1 = (window.innerWidth <= 890) ? "1:0.15" : "1:0.75";
  }

  onResize(event) {
    this.colBreakpoint1 = (event.target.innerWidth <= 890) ? 1 : 4;
    this.rowBreakpoint1 = (event.target.innerWidth <= 890) ? "1:0.15" : "1:0.75";
  }

  getEmployeesWithNumber(){
    this.tarjetaBbeService.getEmployeesWithNumbers()
      .then(resultService => {
        this.employeesWithNumber = resultService;
      }
    );
  }

  onAreaSelected(e) {
    console.log('---- onAreaSelected ---');
    //(document.querySelector('.circle-1-2') as HTMLElement).style.borderColor = '#26A63A';
    //(document.querySelector('.circle-1-2') as HTMLElement).style.backgroundColor = '#26A63A';

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
      console.log('!!!!!!!!!!!! CASE 2 !!!!!!!!!! workstationSelected: ' + e.value.areaId);
      console.log('PASO 4 ' + this.selectedCaseName);
      this.tarjetaBbeService.getMachinesByArea(e.value.areaId)
        .then(resultService => {
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
    if (this.selectedCaseName == 'CASE 1') {
      console.log('!!!!!!!!!!!! CASE 1 !!!!!!!!!!');
      this.tarjetaBbeService.getMachinesByWorkstation(e.value.workstationId)
        .then(resultService => {
          this.machines = resultService;
          console.log('MachinesByWorkstation: ');
          console.log(this.machines);
        }
        );
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

  onMachineSelected(e) {
    console.log('---- onMachineSelected ---');
    console.log('PASO 5');
    console.log(e);
  }

  onObservertypeChange(e) {
    console.log("------------ onObservertypeChange ------------- ");
    console.log(e);
    if (this.observerType === "Contratista") {
      console.log("------------ onObservertypeChange:Contratista ------------- ");
      this.observerSelected = this.observerContractor.toString();
      console.log(this.observerSelected);
    } else if (this.observerType === "Socio") {
      console.log("------------ onObservertypeChange:Socio ------------- ");
      this.observerSelected = "(" + e.value['employeeNumber'] + ") " + e.value['employeeName'];
      console.log(this.observerSelected);
    } else {
      console.log(this.observerType);
      this.observerSelected = '';
    }
  }

  onObservedtypeChange(e) {
    console.log("------------ onObservedtypeChange ------------- ");
    console.log(e);
    if (this.observedType === "Contratista") {
      console.log("------------ onObservedtypeChange:Contratista ------------- ");
      this.observedSelected = this.observedContractor.toString();
      console.log(this.observedSelected);
    } else if (this.observedType === "Socio") {
      console.log("------------ onObservedtypeChange:Socio ------------- ");
      this.observedSelected = "(" + e.value['employeeNumber'] + ") " + e.value['employeeName'];
      console.log(this.observedSelected);
    } else {
      console.log(this.observedType);
      this.observedSelected = '';
    }
  }

  onClickSaveNM() {
    let filledCard = {
      "SelectedDatetime": this.dateSelected + " " + this.timeSelected + ":00.000",
      "OldCompany": this.antiquitySelect,
      "ObserverType": this.observerType,
      "ObserverName": this.observerSelected || "(" + this.observerEmployee['employeeNumber'] + ") " + this.observerEmployee['employeeName'],
      "ObservedType": this.observedType,
      "ObservedName": this.observedSelected || "(" + this.observedEmployee['employeeNumber'] + ") " + this.observedEmployee['employeeName'],
      "Notified": this.isNotifiedPerson,
      "AreaId": this.areaSelected['areaId'].toString(),
      "WorkstationId": this.workstationSelected['workstationId'].toString(),
      "MachineId": this.machineSelected['machineId'].toString(),
      "Description": this.eventDescription || "N/A",

      "ChemicalSpill": this.chemicalSpill ? "1" : "0",
      "BadQualifiedWaste": this.badQualifiedWaste ? "1" : "0",
      "DischargingUncontrolled": this.dischargingUncontrolled ? "1" : "0",
      "MiskNowledge": this.miskNowledge ? "1" : "0",
      "Leak": this.leak ? "1" : "0",
      "Distraction": this.distraction ? "1" : "0",
      "IncompatibilityChemical": this.incompatibilityChemical ? "1" : "0",
      "BadExecutionActivity": this.badExecutionActivity ? "1" : "0",
      "VehiclesContaminantsPresence": this.vehiclesContaminantsPresence ? "1" : "0",
      "StandardMiss": this.standardMiss ? "1" : "0",
      "OtherReasonNS": this.otherReasonNS ? "1" : "0",
      "OtherReasonNSDescription": this.otherReasonNSDescription || "N/A",

      "SoilPollution": this.soilPollution ? "1" : "0",
      "AtmospherePollution": this.atmospherePollution ? "1" : "0",
      "WaterPollution": this.waterPollution ? "1" : "0",
      "AffectationFloraFauna": this.affectationFloraFauna ? "1" : "0",
      "OtherImpactNS": this.otherImpactReason ? "1" : "0",
      "OtherImpactNSDescription": this.otherImpactReasonDescription || "N/A",

      "NearMissTypes": this.nearMissTypeSelected,
      "QuicklyAction": this.quicklyActionSelected,
      "DailyComment": this.dailyCommentSelected ? "1" : "0",
      "AddInPyramid": this.addInPyramidSelected ? "1" : "0",
      "CardBbeType": this.cardTypeSelected,
      "MaintenanceTypeId": this.placeSelected.toString(),
      "DepartmentId": this.departmentSelected['departmentId'].toString(),
      "ObserverEmployeeId": this.observerEmployee['employeeNumber'].toString(),
    };

    this.tarjetaNMService.setNMCard(filledCard)
      .then(resultService => {
        console.log('setBbeCard result: ');
        console.log(resultService);
        if (resultService == "Registro creado") {
          alert(resultService);
        } else {
          alert("Registro no creado");
        }
      }
      );
  }

}
