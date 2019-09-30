import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule, MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule, MatTabsModule, MatCardModule, MatDividerModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatRadioModule, MatGridListModule, MatTableModule, MatCheckboxModule, MatStepperModule, MatNativeDateModule, MatRippleModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NavbarComponent } from './material/navbar/navbar.component';
import { TabsContainerComponent } from './layout/tabs-container/tabs-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistroTarjetaComponent } from './components/registro-tarjeta/registro-tarjeta.component';

import { TarjetaBBEComponent } from './components/registro-tarjeta/tarjeta-bbe/tarjeta-bbe.component';
import { TarjetaNearMissComponent } from './components/registro-tarjeta/tarjeta-near-miss/tarjeta-near-miss.component';

import { TarjetaBbeService } from './components/registro-tarjeta/tarjeta-bbe/tarjeta-bbe.service';

import { ExportacionTarjetaComponent } from './components/exportacion-tarjeta/exportacion-tarjeta.component';

import { ReporteoTarjetaComponent } from './components/reporteo-tarjeta/reporteo-tarjeta.component';

import { ReporteoTarjetaBbeComponent } from './components/reporteo-tarjeta/tarjeta-bbe/tarjeta-bbe.component';
import { ReporteoTarjetaNearMissComponent } from './components/reporteo-tarjeta/tarjeta-near-miss/tarjeta-nm.component';

import { FiltroTarjetaComponent } from './components/filtro-tarjeta/filtro-tarjeta.component';


import { CheckboxValueDirective } from './material/checkbox/checkbox-value-directive';
import { A11yModule } from '@angular/cdk/a11y';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';


import { GraficaBbeComponent } from './components/reporteo-tarjeta/tarjeta-bbe/grafica-bbe/grafica-bbe.component';
import { TablaBbeComponent } from './components/reporteo-tarjeta/tarjeta-bbe/tabla-bbe/tabla-bbe.component';
import { GraficaNMComponent } from './components/reporteo-tarjeta/tarjeta-near-miss/grafica-nm/grafica-nm.component'
import { TablaNMComponent } from './components/reporteo-tarjeta/tarjeta-near-miss/tabla-nm/tabla-nm.component';
import { EventEmitter } from 'events';
import { ReporteoTarjetaService} from './components/reporteo-tarjeta/reporteo-tarjeta.service';

@NgModule({
  declarations: [
    AppComponent,
    TarjetaBBEComponent,
    NavbarComponent,
    TabsContainerComponent,
    RegistroTarjetaComponent,
    TarjetaNearMissComponent,
    FiltroTarjetaComponent,
    CheckboxValueDirective,
    ReporteoTarjetaComponent,
    ReporteoTarjetaBbeComponent,
    ReporteoTarjetaNearMissComponent,
    ExportacionTarjetaComponent,
    GraficaBbeComponent,
    TablaBbeComponent,
    TablaNMComponent,
    GraficaNMComponent,
   
    
  ],
  exports: [
    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatGridListModule,
    MatTableModule,
    MatCheckboxModule,
    AngularFontAwesomeModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatRippleModule,
    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
    BrowserAnimationsModule,
    MatTableModule,
  ],
  providers: [TarjetaBbeService, ReporteoTarjetaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
