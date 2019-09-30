import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ReporteoTarjetaService} from './reporteo-tarjeta.service';
@Component({
  selector: 'app-reporteo-tarjeta',
  templateUrl: './reporteo-tarjeta.component.html',
  styleUrls: ['./reporteo-tarjeta.component.sass'],
  encapsulation: ViewEncapsulation.None,
})


export class ReporteoTarjetaComponent implements OnInit {

  cardTypeSelected: string = "0";

  constructor(private reporteoTarjetaService: ReporteoTarjetaService) { }

  ngOnInit() {

  }

  onCardTypeSelected(e) {
    this.cardTypeSelected = e.value;
    console.log("---- onCardTypeSelected --- " + this.cardTypeSelected);
  }

}
