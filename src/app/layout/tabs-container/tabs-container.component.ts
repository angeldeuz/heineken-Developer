import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class TabsContainerComponent implements OnInit {

  constructor(
    private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer){
    this.matIconRegistry.addSvgIcon(
      'filtro_tab',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/imagenes/icon_filtro.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'registro_tab',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/imagenes/icon_registro.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'exportacion_tab',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/imagenes/icon_exportaXLS.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'reporteo_tab',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/imagenes/icon_reporteo.svg')
    );
  }

  ngOnInit() {
  }

}
