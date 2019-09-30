import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { FiltroTarjetaService } from './filtro-tarjeta.service';
import { MatTableDataSource } from '@angular/material';


export class DatepickerTouchExample { }

// tslint:disable: quotemark
// tslint:disable: object-literal-key-quotes
// tslint:disable: max-line-length

export interface BbeCards {
  id: number;
  selectedDatetime: string;
  lugar: string;
  departamento: string;
  area: string;
  workstation: string;
  maquina: string;
  systems: string;
  noSocio: string;
  nombreObservador: string;
  sucedio: string;
  impacto: string;
  observado: string;
  comportamiento: string;
  causa: string;
  description: string;
}

@Component({
  selector: 'app-filtro-tarjeta',
  templateUrl: './filtro-tarjeta.component.html',
  styleUrls: ['./filtro-tarjeta.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class FiltroTarjetaComponent implements OnInit {


  cards: string;
  displayedColumns: string[] = ['id', 'selectedDatetime', 'lugar', 'departamento', 'area', 'workstation', 'maquina', 'noSocio', 'nombreObservador', 'sucedio', 'impacto', 'observado', 'tipoComportamiento', 'causa', 'description'];
  dataSource = new MatTableDataSource();
  cardsData: string[];
  filteredValues = new Array();
  currentFilter = new Array();

  cont: number;

  constructor(private filterCards: FiltroTarjetaService) { }
  @ViewChild(MatSort, {
    static: true
  }) sort: MatSort;
  globalFilter = '';


  getCardsBbe() {
    this.filterCards.getCards()
      .then(resultService => {
        console.log(JSON.stringify(resultService));
        this.dataSource = new MatTableDataSource(resultService);


        this.cardsData = resultService;


        this.filteredValues['id'] = "";
        this.filteredValues['selectedDatetimeStart'] = "";
        this.filteredValues['selectedDatetimeEnd'] = "";
        this.filteredValues['lugar'] = "";
        this.filteredValues['departamento'] = "";
        this.filteredValues['area'] = "";
        this.filteredValues['workstation'] = "";
        this.filteredValues['maquina'] = "";
        this.filteredValues['noSocio'] = "";
        this.filteredValues['nombreObservador'] = "";
        this.filteredValues['sucedio'] = "";
        this.filteredValues['impacto'] = "";
        this.filteredValues['observado'] = "";
        this.filteredValues['tipoComportamiento'] = "";
        this.filteredValues['causa'] = "";
        this.filteredValues['description'] = "";
        this.dataSource.sort = this.sort;
        /*         this.cards = resultService; */
      });
  }


  applyFilterId(filter) {
    if (filter == null) {
      this.filteredValues["id"] = "";
    } else {
      this.filteredValues["id"] = filter;
    }
    this.applyFilter();
  }
  applyFilterDateStart(filter) {
    if (filter == null) {
      this.filteredValues["selectedDatetimeStart"] = "";
    } else {
      this.filteredValues["selectedDatetimeStart"] = this.convert(filter);
    }
    this.applyFilter();
  }
  applyFilterDateEnd(filter) {
    if (filter == null) {
      this.filteredValues["selectedDatetimeEnd"] = "";
    } else {
      this.filteredValues["selectedDatetimeEnd"] = this.convert(filter);
    }
    this.applyFilter();
  }
  applyFilterLugar(filter) {
    if (filter == null) {
      this.filteredValues["lugar"] = "";
    } else {
      this.filteredValues["lugar"] = filter;
    }
    this.applyFilter();
  }
  applyFilterDepartamento(filter) {
    if (filter == null) {
      this.filteredValues["departamento"] = "";
    } else {
      this.filteredValues["departamento"] = filter;
    }
    this.applyFilter();
  }
  applyFilterArea(filter) {
    if (filter == null) {
      this.filteredValues["area"] = "";
    } else {
      this.filteredValues["area"] = filter;
    }
    this.applyFilter();
  }
  applyFilterWorkstation(filter) {
    if (filter == null) {
      this.filteredValues["workstation"] = "";
    } else {
      this.filteredValues["workstation"] = filter;
    }
    this.applyFilter();
  }
  applyFilterMaquina(filter) {
    if (filter == null) {
      this.filteredValues["maquina"] = "";
    } else {
      this.filteredValues["maquina"] = filter;
    }
    this.applyFilter();
  }
  applyFilterNoSocio(filter) {
    if (filter == null) {
      this.filteredValues["noSocio"] = "";
    } else {
      this.filteredValues["noSocio"] = filter;
    }
    this.applyFilter();
  }
  applyFilterNombre(filter) {
    if (filter == null) {
      this.filteredValues["nombreObservador"] = "";
    } else {
      this.filteredValues["nombreObservador"] = filter;
    }
    this.applyFilter();
  }
  applyFilterSucedio(filter) {
    if (filter == null) {
      this.filteredValues["sucedio"] = "";
    } else {
      this.filteredValues["sucedio"] = filter;
    }
    this.applyFilter();
  }
  applyFilterImpacto(filter) {
    if (filter == null) {
      this.filteredValues["impacto"] = "";
    } else {
      this.filteredValues["impacto"] = filter;
    }
    this.applyFilter();
  }
  applyFilterObservado(filter) {
    if (filter == null) {
      this.filteredValues["observado"] = "";
    } else {
      this.filteredValues["observado"] = filter;
    }
    this.applyFilter();
  }
  applyFilterComportamiento(filter) {
    if (filter == null) {
      this.filteredValues["tipoComportamiento"] = "";
    } else {
      this.filteredValues["tipoComportamiento"] = filter;
    }
    this.applyFilter();
  }
  applyFilterCausa(filter) {
    if (filter == null) {
      this.filteredValues["causa"] = "";
    } else {
      this.filteredValues["causa"] = filter;
    }
    this.applyFilter();
  }
  applyFilterdescription(filter) {
    if (filter == null) {
      this.filteredValues["description"] = "";
    } else {
      this.filteredValues["description"] = filter;
    }
    this.applyFilter();
  }


  ngOnInit() {
    this.getCardsBbe();

  }
  applyFilter() {
    this.currentFilter = new Array();


    console.log(this.filteredValues);
    if (this.dataSource != null && this.filteredValues["id"] != 0) {
      console.log("id");
      if (this.currentFilter != null && this.currentFilter.length <= 0) {
        console.log("id normal");
        this.cont = 0;
        for (var dato of JSON.parse(JSON.stringify(this.cardsData))) {
          if (dato.id == this.filteredValues["id"]) {
            this.currentFilter[this.cont] = dato;
            this.dataSource = new MatTableDataSource(this.currentFilter);
            this.dataSource.sort = this.sort;
            console.log(this.currentFilter);
            this.cont++;
          }

        }
        if (this.currentFilter.length <= 0 || this.currentFilter == null || this.cont == 0) {
          this.dataSource = new MatTableDataSource();
        }
      } else {
        console.log(this.currentFilter);
        this.cont = 0;
        var filterTemp = new Array();
        filterTemp = this.currentFilter;
        this.currentFilter = new Array();
        console.log("id else");
        this.cont = 0;
        for (var dato of JSON.parse(JSON.stringify(filterTemp))) {
          if (dato.id == this.filteredValues["id"]) {
            this.currentFilter[this.cont] = dato;
            this.dataSource = new MatTableDataSource(this.currentFilter);
            this.dataSource.sort = this.sort;
            console.log(this.currentFilter);
            this.cont++;
          }

        }
        if (this.currentFilter.length <= 0 || this.currentFilter == null || this.cont == 0) {
          this.dataSource = new MatTableDataSource();
        }
      }

    }

    if (this.dataSource != null && this.filteredValues["selectedDatetimeStart"] != "" && this.filteredValues["selectedDatetimeEnd"] != "") {
      console.log("selectedDatetime");

      if (this.currentFilter != null && this.currentFilter.length <= 0) {
        console.log("selectedDatetime normal");
        this.cont = 0;
        for (var dato of JSON.parse(JSON.stringify(this.cardsData))) {

          if (this.checkDate(this.filteredValues["selectedDatetimeStart"], this.filteredValues["selectedDatetimeEnd"], this.convert(dato.selectedDatetime)) == true) {
            this.currentFilter[this.cont] = dato;
            this.dataSource = new MatTableDataSource(this.currentFilter);
            this.dataSource.sort = this.sort;
            console.log(this.currentFilter);
            this.cont++;
          }
        }
        if (this.currentFilter.length <= 0 || this.currentFilter == null || this.cont == 0) {
          this.dataSource = new MatTableDataSource();
        }
      } else {
        console.log(this.currentFilter);
        this.cont = 0;
        var filterTemp = new Array();
        filterTemp = this.currentFilter;
        this.currentFilter = new Array();
        console.log("selectedDatetime else");
        console.log(this.currentFilter);
        this.cont = 0;
        for (var dato of JSON.parse(JSON.stringify(filterTemp))) {
          console.log("_____________");
          console.log(dato.selectedDatetime.toLowerCase());
          console.log("_____________");
          console.log(this.convert(dato.selectedDatetime));
          if (this.convert(dato.selectedDatetime) > this.filteredValues["selectedDatetimeStart"] && this.convert(dato.selectedDatetime) < this.filteredValues["selectedDatetimeEnd"]) {
            this.currentFilter[this.cont] = dato;
            this.dataSource = new MatTableDataSource(this.currentFilter);
            this.dataSource.sort = this.sort;
            console.log(this.currentFilter);
            this.cont++;
          }
        }
        if (this.currentFilter.length <= 0 || this.currentFilter == null || this.cont == 0) {
          this.dataSource = new MatTableDataSource();
        }
      }
    }

    if (this.dataSource != null && this.filteredValues["lugar"] != "") {
      console.log("lugar");

      if (this.currentFilter != null && this.currentFilter.length <= 0) {
        console.log("lugar normal");
        this.cont = 0;
        for (var dato of JSON.parse(JSON.stringify(this.cardsData))) {
          if (dato.lugar.toLowerCase().includes(this.filteredValues["lugar"].toLowerCase())) {
            this.currentFilter[this.cont] = dato;
            this.dataSource = new MatTableDataSource(this.currentFilter);
            this.dataSource.sort = this.sort;
            console.log(this.currentFilter);
            this.cont++;
          }
        }
        if (this.currentFilter.length <= 0 || this.currentFilter == null || this.cont == 0) {
          this.dataSource = new MatTableDataSource();
        }
      } else {
        console.log(this.currentFilter);
        this.cont = 0;
        var filterTemp = new Array();
        filterTemp = this.currentFilter;
        this.currentFilter = new Array();
        console.log("lugar else");
        console.log(this.currentFilter);
        this.cont = 0;
        for (var dato of JSON.parse(JSON.stringify(filterTemp))) {
          console.log("_____________");
          console.log(dato.lugar.toLowerCase());
          console.log("_____________");

          if (dato.lugar.toLowerCase().includes(this.filteredValues["lugar"].toLowerCase())) {
            this.currentFilter[this.cont] = dato;
            this.dataSource = new MatTableDataSource(this.currentFilter);
            this.dataSource.sort = this.sort;
            console.log(this.currentFilter);
            this.cont++;
          }
        }
        if (this.currentFilter.length <= 0 || this.currentFilter == null || this.cont == 0) {
          this.dataSource = new MatTableDataSource();
        }
      }
    }


    if (this.dataSource != null && this.filteredValues["departamento"] != "") {
      console.log("departamento");

      if (this.currentFilter != null && this.currentFilter.length <= 0) {
        console.log("departamento normal");
        this.cont = 0;
        for (var dato of JSON.parse(JSON.stringify(this.cardsData))) {
          if (dato.departamento.toLowerCase().includes(this.filteredValues["departamento"].toLowerCase())) {
            this.currentFilter[this.cont] = dato;
            this.dataSource = new MatTableDataSource(this.currentFilter);
            this.dataSource.sort = this.sort;
            console.log(this.currentFilter);
            this.cont++;
          }
        }
        if (this.currentFilter.length <= 0 || this.currentFilter == null || this.cont == 0) {
          this.dataSource = new MatTableDataSource();
        }
      } else {
        console.log(this.currentFilter);
        this.cont = 0;
        var filterTemp = new Array();
        filterTemp = this.currentFilter;
        this.currentFilter = new Array();
        console.log("departamento else");
        console.log(this.currentFilter);
        this.cont = 0;
        for (var dato of JSON.parse(JSON.stringify(filterTemp))) {
          console.log("_____________");
          console.log(dato.departamento.toLowerCase());
          console.log("_____________");

          if (dato.departamento.toLowerCase().includes(this.filteredValues["departamento"].toLowerCase())) {
            this.currentFilter[this.cont] = dato;
            this.dataSource = new MatTableDataSource(this.currentFilter);
            this.dataSource.sort = this.sort;
            console.log(this.currentFilter);
            this.cont++;
          }
        }
        if (this.currentFilter.length <= 0 || this.currentFilter == null || this.cont == 0) {
          this.dataSource = new MatTableDataSource();
        }
      }
    }


    if (this.dataSource != null && this.filteredValues["area"] != "") {
      console.log("area");

      if (this.currentFilter != null && this.currentFilter.length <= 0) {
        console.log("area normal");
        this.cont = 0;
        for (var dato of JSON.parse(JSON.stringify(this.cardsData))) {
          if (dato.area.toLowerCase().includes(this.filteredValues["area"].toLowerCase())) {
            this.currentFilter[this.cont] = dato;
            this.dataSource = new MatTableDataSource(this.currentFilter);
            this.dataSource.sort = this.sort;
            console.log(this.currentFilter);
            this.cont++;
          }
        }
        if (this.currentFilter.length <= 0 || this.currentFilter == null || this.cont == 0) {
          this.dataSource = new MatTableDataSource();
        }
      } else {
        console.log("area else");
        console.log(this.currentFilter);
        this.cont = 0;
        var filterTemp = new Array();
        filterTemp = this.currentFilter;
        this.currentFilter = new Array();
        for (var dato of JSON.parse(JSON.stringify(filterTemp))) {
          console.log("_____________");
          console.log(dato.area);
          console.log("_____________");

          if (dato.area.toLowerCase().includes(this.filteredValues["area"].toLowerCase())) {
            this.currentFilter[this.cont] = dato;
            this.dataSource = new MatTableDataSource(this.currentFilter);
            this.dataSource.sort = this.sort;
            console.log(this.currentFilter);
            this.cont++;
          }
        }
        if (this.currentFilter.length <= 0 || this.currentFilter == null || this.cont == 0) {
          this.dataSource = new MatTableDataSource();
        }
      }
    }

    if (this.dataSource != null && this.filteredValues["workstation"] != "") {
      console.log("workstation");

      if (this.currentFilter != null && this.currentFilter.length <= 0) {
        console.log("workstation normal");
        this.cont = 0;
        for (var dato of JSON.parse(JSON.stringify(this.cardsData))) {
          if (dato.workstation.toLowerCase().includes(this.filteredValues["workstation"].toLowerCase())) {
            this.currentFilter[this.cont] = dato;
            this.dataSource = new MatTableDataSource(this.currentFilter);
            this.dataSource.sort = this.sort;
            console.log(this.currentFilter);
            this.cont++;
          }
        }
        if (this.currentFilter.length <= 0 || this.currentFilter == null || this.cont == 0) {
          this.dataSource = new MatTableDataSource();
        }
      } else {
        console.log(this.currentFilter);
        this.cont = 0;
        var filterTemp = new Array();
        filterTemp = this.currentFilter;
        this.currentFilter = new Array();
        console.log("workstation else");
        console.log(this.currentFilter);
        this.cont = 0;
        for (var dato of JSON.parse(JSON.stringify(filterTemp))) {
          console.log("_____________");
          console.log(dato.workstation.toLowerCase());
          console.log("_____________");

          if (dato.workstation.toLowerCase().includes(this.filteredValues["workstation"].toLowerCase())) {
            this.currentFilter[this.cont] = dato;
            this.dataSource = new MatTableDataSource(this.currentFilter);
            this.dataSource.sort = this.sort;
            console.log(this.currentFilter);
            this.cont++;
          }
        }
        if (this.currentFilter.length <= 0 || this.currentFilter == null || this.cont == 0) {
          this.dataSource = new MatTableDataSource();
        }
      }
    }


    if (this.dataSource != null && this.filteredValues["maquina"] != "") {
      console.log("maquina");

      if (this.currentFilter != null && this.currentFilter.length <= 0) {
        console.log("maquina normal");
        this.cont = 0;
        for (var dato of JSON.parse(JSON.stringify(this.cardsData))) {
          if (dato.maquina.toLowerCase().includes(this.filteredValues["maquina"].toLowerCase())) {
            this.currentFilter[this.cont] = dato;
            this.dataSource = new MatTableDataSource(this.currentFilter);
            this.dataSource.sort = this.sort;
            console.log(this.currentFilter);
            this.cont++;
          }
        }
        if (this.currentFilter.length <= 0 || this.currentFilter == null || this.cont == 0) {
          this.dataSource = new MatTableDataSource();
        }
      } else {
        console.log(this.currentFilter);
        this.cont = 0;
        var filterTemp = new Array();
        filterTemp = this.currentFilter;
        this.currentFilter = new Array();
        console.log("maquina else");
        console.log(this.currentFilter);
        this.cont = 0;
        for (var dato of JSON.parse(JSON.stringify(filterTemp))) {
          console.log("_____________");
          console.log(dato.maquina.toLowerCase());
          console.log("_____________");

          if (dato.maquina.toLowerCase().includes(this.filteredValues["maquina"].toLowerCase())) {
            this.currentFilter[this.cont] = dato;
            this.dataSource = new MatTableDataSource(this.currentFilter);
            this.dataSource.sort = this.sort;
            console.log(this.currentFilter);
            this.cont++;
          }
        }
        if (this.currentFilter.length <= 0 || this.currentFilter == null || this.cont == 0) {
          this.dataSource = new MatTableDataSource();
        }
      }
    }


    if (this.dataSource != null && this.filteredValues["noSocio"] != "") {
      console.log("Socio");

      if (this.currentFilter != null && this.currentFilter.length <= 0) {
        console.log("Socio normal");
        this.cont = 0;
        for (var dato of JSON.parse(JSON.stringify(this.cardsData))) {
          console.log(dato.noSocio);
          if (dato.noSocio == this.filteredValues["noSocio"]) {
            this.currentFilter[this.cont] = dato;
            this.dataSource = new MatTableDataSource(this.currentFilter);
            this.dataSource.sort = this.sort;
            console.log(this.currentFilter);
            this.cont++;
          }
        }
        if (this.currentFilter.length <= 0 || this.currentFilter == null || this.cont == 0) {
          this.dataSource = new MatTableDataSource();
        }
      } else {
        console.log(this.currentFilter);
        this.cont = 0;
        var filterTemp = new Array();
        filterTemp = this.currentFilter;
        this.currentFilter = new Array();
        console.log("Socio else");
        console.log(this.currentFilter);
        this.cont = 0;
        for (var dato of JSON.parse(JSON.stringify(filterTemp))) {
          console.log("_____________");
          console.log(dato.NoSocio);
          console.log("_____________");

          if (dato.noSocio == (this.filteredValues["noSocio"])) {
            this.currentFilter[this.cont] = dato;
            this.dataSource = new MatTableDataSource(this.currentFilter);
            this.dataSource.sort = this.sort;
            console.log(this.currentFilter);
            this.cont++;
          }
        }
        if (this.currentFilter.length <= 0 || this.currentFilter == null || this.cont == 0) {
          this.dataSource = new MatTableDataSource();
        }
      }
    }


    if (this.dataSource != null && this.filteredValues["nombreObservador"] != "") {
      console.log("nombreObservador");

      if (this.currentFilter != null && this.currentFilter.length <= 0) {
        console.log("nombreObservador normal");
        this.cont = 0;
        for (var dato of JSON.parse(JSON.stringify(this.cardsData))) {
          if (dato.nombreObservador.toLowerCase().includes(this.filteredValues["nombreObservador"].toLowerCase())) {
            this.currentFilter[this.cont] = dato;
            this.dataSource = new MatTableDataSource(this.currentFilter);
            this.dataSource.sort = this.sort;
            console.log(this.currentFilter);
            this.cont++;
          }
        }
        if (this.currentFilter.length <= 0 || this.currentFilter == null || this.cont == 0) {
          this.dataSource = new MatTableDataSource();
        }
      } else {
        console.log(this.currentFilter);
        this.cont = 0;
        var filterTemp = new Array();
        filterTemp = this.currentFilter;
        this.currentFilter = new Array();
        console.log("nombreObservador else");
        console.log(this.currentFilter);
        this.cont = 0;
        for (var dato of JSON.parse(JSON.stringify(filterTemp))) {
          console.log("_____________");
          console.log(dato.nombreObservador.toLowerCase());
          console.log("_____________");

          if (dato.nombreObservador.toLowerCase().includes(this.filteredValues["nombreObservador"].toLowerCase())) {
            this.currentFilter[this.cont] = dato;
            this.dataSource = new MatTableDataSource(this.currentFilter);
            this.dataSource.sort = this.sort;
            console.log(this.currentFilter);
            this.cont++;
          }
        }
        if (this.currentFilter.length <= 0 || this.currentFilter == null || this.cont == 0) {
          this.dataSource = new MatTableDataSource();
        }
      }
    }


    if (this.dataSource != null && this.filteredValues["sucedio"] != "") {
      console.log("sucedio");

      if (this.currentFilter != null && this.currentFilter.length <= 0) {
        console.log("sucedio normal");
        this.cont = 0;
        for (var dato of JSON.parse(JSON.stringify(this.cardsData))) {
          if (dato.sucedio.toLowerCase().includes(this.filteredValues["sucedio"].toLowerCase())) {
            this.currentFilter[this.cont] = dato;
            this.dataSource = new MatTableDataSource(this.currentFilter);
            this.dataSource.sort = this.sort;
            console.log(this.currentFilter);
            this.cont++;
          }
        }
        if (this.currentFilter.length <= 0 || this.currentFilter == null || this.cont == 0) {
          this.dataSource = new MatTableDataSource();
        }
      } else {
        console.log(this.currentFilter);
        this.cont = 0;
        var filterTemp = new Array();
        filterTemp = this.currentFilter;
        this.currentFilter = new Array();
        console.log("sucedio else");
        console.log(this.currentFilter);
        this.cont = 0;
        for (var dato of JSON.parse(JSON.stringify(filterTemp))) {
          console.log("_____________");
          console.log(dato.sucedio.toLowerCase());
          console.log("_____________");

          if (dato.sucedio.toLowerCase().includes(this.filteredValues["sucedio"].toLowerCase())) {
            this.currentFilter[this.cont] = dato;
            this.dataSource = new MatTableDataSource(this.currentFilter);
            this.dataSource.sort = this.sort;
            console.log(this.currentFilter);
            this.cont++;
          }
        }
        if (this.currentFilter.length <= 0 || this.currentFilter == null || this.cont == 0) {
          this.dataSource = new MatTableDataSource();
        }
      }
    }


    if (this.dataSource != null && this.filteredValues["impacto"] != "") {
      console.log("impacto");

      if (this.currentFilter != null && this.currentFilter.length <= 0) {
        console.log("impacto normal");
        this.cont = 0;
        for (var dato of JSON.parse(JSON.stringify(this.cardsData))) {
          if (dato.impacto.toLowerCase().includes(this.filteredValues["impacto"].toLowerCase())) {
            this.currentFilter[this.cont] = dato;
            this.dataSource = new MatTableDataSource(this.currentFilter);
            this.dataSource.sort = this.sort;
            console.log(this.currentFilter);
            this.cont++;
          }
        }
        if (this.currentFilter.length <= 0 || this.currentFilter == null || this.cont == 0) {
          this.dataSource = new MatTableDataSource();
        }
      } else {
        console.log(this.currentFilter);
        this.cont = 0;
        var filterTemp = new Array();
        filterTemp = this.currentFilter;
        this.currentFilter = new Array();
        console.log("impacto else");
        console.log(this.currentFilter);
        this.cont = 0;
        for (var dato of JSON.parse(JSON.stringify(filterTemp))) {
          console.log("_____________");
          console.log(dato.impacto.toLowerCase());
          console.log("_____________");

          if (dato.impacto.toLowerCase().includes(this.filteredValues["impacto"].toLowerCase())) {
            this.currentFilter[this.cont] = dato;
            this.dataSource = new MatTableDataSource(this.currentFilter);
            this.dataSource.sort = this.sort;
            console.log(this.currentFilter);
            this.cont++;
          }
        }
        if (this.currentFilter.length <= 0 || this.currentFilter == null || this.cont == 0) {
          this.dataSource = new MatTableDataSource();
        }
      }
    }


    if (this.dataSource != null && this.filteredValues["observado"] != "") {
      console.log("observado");

      if (this.currentFilter != null && this.currentFilter.length <= 0) {
        console.log("observado normal");
        this.cont = 0;
        for (var dato of JSON.parse(JSON.stringify(this.cardsData))) {
          if (dato.observado.toLowerCase().includes(this.filteredValues["observado"].toLowerCase())) {
            this.currentFilter[this.cont] = dato;
            this.dataSource = new MatTableDataSource(this.currentFilter);
            this.dataSource.sort = this.sort;
            console.log(this.currentFilter);
            this.cont++;
          }
        }
        if (this.currentFilter.length <= 0 || this.currentFilter == null || this.cont == 0) {
          this.dataSource = new MatTableDataSource();
        }
      } else {
        console.log(this.currentFilter);
        this.cont = 0;
        var filterTemp = new Array();
        filterTemp = this.currentFilter;
        this.currentFilter = new Array();
        console.log("observado else");
        console.log(this.currentFilter);
        this.cont = 0;
        for (var dato of JSON.parse(JSON.stringify(filterTemp))) {
          console.log("_____________");
          console.log(dato.observado.toLowerCase());
          console.log("_____________");

          if (dato.observado.toLowerCase().includes(this.filteredValues["observado"].toLowerCase())) {
            this.currentFilter[this.cont] = dato;
            this.dataSource = new MatTableDataSource(this.currentFilter);
            this.dataSource.sort = this.sort;
            console.log(this.currentFilter);
            this.cont++;
          }
        }
        if (this.currentFilter.length <= 0 || this.currentFilter == null || this.cont == 0) {
          this.dataSource = new MatTableDataSource();
        }
      }
    }


    if (this.dataSource != null && this.filteredValues["tipoComportamiento"] != "") {
      console.log("tipoComportamiento");

      if (this.currentFilter != null && this.currentFilter.length <= 0) {
        console.log("tipoComportamiento normal");
        this.cont = 0;
        for (var dato of JSON.parse(JSON.stringify(this.cardsData))) {
          if (dato.comportamiento.toLowerCase().includes(this.filteredValues["tipoComportamiento"].toLowerCase())) {
            this.currentFilter[this.cont] = dato;
            this.dataSource = new MatTableDataSource(this.currentFilter);
            this.dataSource.sort = this.sort;
            console.log(this.currentFilter);
            this.cont++;
          }
        }
        if (this.currentFilter.length <= 0 || this.currentFilter == null || this.cont == 0) {
          this.dataSource = new MatTableDataSource();
        }
      } else {
        console.log(this.currentFilter);
        this.cont = 0;
        var filterTemp = new Array();
        filterTemp = this.currentFilter;
        this.currentFilter = new Array();
        console.log("tipoComportamiento else");
        console.log(this.currentFilter);
        this.cont = 0;
        for (var dato of JSON.parse(JSON.stringify(filterTemp))) {
          console.log("_____________");
          console.log(dato.comportamiento.toLowerCase());
          console.log("_____________");

          if (dato.comportamiento.toLowerCase().includes(this.filteredValues["tipoComportamiento"].toLowerCase())) {
            this.currentFilter[this.cont] = dato;
            this.dataSource = new MatTableDataSource(this.currentFilter);
            this.dataSource.sort = this.sort;
            console.log(this.currentFilter);
            this.cont++;
          }
        }
        if (this.currentFilter.length <= 0 || this.currentFilter == null || this.cont == 0) {
          this.dataSource = new MatTableDataSource();
        }
      }
    }

    if (this.dataSource != null && this.filteredValues["causa"] != "") {
      console.log("causa");

      if (this.currentFilter != null && this.currentFilter.length <= 0) {
        console.log("causa normal");
        this.cont = 0;
        for (var dato of JSON.parse(JSON.stringify(this.cardsData))) {
          if (dato.causa.toLowerCase().includes(this.filteredValues["causa"].toLowerCase())) {
            this.currentFilter[this.cont] = dato;
            this.dataSource = new MatTableDataSource(this.currentFilter);
            this.dataSource.sort = this.sort;
            console.log(this.currentFilter);
            this.cont++;
          }
        }
        if (this.currentFilter.length <= 0 || this.currentFilter == null || this.cont == 0) {
          this.dataSource = new MatTableDataSource();
        }
      } else {
        console.log(this.currentFilter);
        this.cont = 0;
        var filterTemp = new Array();
        filterTemp = this.currentFilter;
        this.currentFilter = new Array();
        console.log("causa else");
        console.log(this.currentFilter);
        this.cont = 0;
        for (var dato of JSON.parse(JSON.stringify(filterTemp))) {
          console.log("_____________");
          console.log(dato.causa.toLowerCase());
          console.log("_____________");

          if (dato.causa.toLowerCase().includes(this.filteredValues["causa"].toLowerCase())) {
            this.currentFilter[this.cont] = dato;
            this.dataSource = new MatTableDataSource(this.currentFilter);
            this.dataSource.sort = this.sort;
            console.log(this.currentFilter);
            this.cont++;
          }
        }
        if (this.currentFilter.length <= 0 || this.currentFilter == null || this.cont == 0) {
          this.dataSource = new MatTableDataSource();
        }
      }
    }

    if (this.dataSource != null && this.filteredValues["description"] != "") {
      console.log("description");

      if (this.currentFilter != null && this.currentFilter.length <= 0) {
        console.log("description normal");
        this.cont = 0;
        for (var dato of JSON.parse(JSON.stringify(this.cardsData))) {
          if (dato.descripcion.toLowerCase().includes(this.filteredValues["description"].toLowerCase())) {
            this.currentFilter[this.cont] = dato;
            this.dataSource = new MatTableDataSource(this.currentFilter);
            this.dataSource.sort = this.sort;
            console.log(this.currentFilter);
            this.cont++;
          }
        }
        if (this.currentFilter.length <= 0 || this.currentFilter == null || this.cont == 0) {
          this.dataSource = new MatTableDataSource();
        }
      } else {
        console.log(this.currentFilter);
        this.cont = 0;
        var filterTemp = new Array();
        filterTemp = this.currentFilter;
        this.currentFilter = new Array();
        console.log("description else");
        console.log(this.currentFilter);
        this.cont = 0;
        for (var dato of JSON.parse(JSON.stringify(filterTemp))) {
          console.log("_____________");
          console.log(dato.descripcion.toLowerCase());
          console.log("_____________");

          if (dato.descripcion.toLowerCase().includes(this.filteredValues["description"].toLowerCase())) {
            this.currentFilter[this.cont] = dato;
            this.dataSource = new MatTableDataSource(this.currentFilter);
            this.dataSource.sort = this.sort;
            console.log(this.currentFilter);
            this.cont++;
          }
        }
        if (this.currentFilter.length <= 0 || this.currentFilter == null || this.cont == 0) {
          this.dataSource = new MatTableDataSource();
        }
      }
    }


    if (this.filteredValues['area'] == "" && this.filteredValues['causa'] == "" && this.filteredValues['departamento'] == "" && this.filteredValues['description'] == "" && this.filteredValues['id'] == "" && this.filteredValues['impacto'] == "" && this.filteredValues['lugar'] == "" && this.filteredValues['maquina'] == "" && this.filteredValues['noSocio'] == "" && this.filteredValues['nombreObservador'] == "" && this.filteredValues['observado'] == "" && this.filteredValues['selectedDatetimeStart'] == "" && this.filteredValues['selectedDatetimeEnd'] == "" && this.filteredValues['sucedio'] == "" && this.filteredValues['tipoComportamiento'] == "" && this.filteredValues['workstation'] == "") {
      this.dataSource = new MatTableDataSource(this.cardsData);
      this.dataSource.sort = this.sort;
    }

    /* _______________________________________________________________________________ */
  }
  convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [mnth, day, date.getFullYear()].join("/");
  }
  checkDate(inicio, fin, comparar) {
    var dateFrom = inicio;
    var dateTo = fin;
    var dateCheck = comparar;

    var d1 = dateFrom.split("/");
    var d2 = dateTo.split("/");
    var c = dateCheck.split("/");

    var from = new Date(d1[2], parseInt(d1[1]) - 1, d1[0]);  // -1 because months are from 0 to 11
    var to = new Date(d2[2], parseInt(d2[1]) - 1, d2[0]);
    var check = new Date(c[2], parseInt(c[1]) - 1, c[0]);

    return check >= from || check <= to;
  }

}
