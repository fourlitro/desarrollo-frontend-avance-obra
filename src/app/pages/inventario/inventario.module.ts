import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasasService } from 'src/app/services/casas.service';

import { ExploradorCasasComponent } from './explorador-casas/explorador-casas.component';
import { FiltradoCasasComponent } from './filtrado-casas/filtrado-casas.component';
import { ListadoCasasComponent } from './listado-casas/listado-casas.component';
import { DetalleCasasComponent } from './detalle-casas/detalle-casas.component';



@NgModule({
  declarations: [
    ExploradorCasasComponent,
    FiltradoCasasComponent,
    ListadoCasasComponent,
    DetalleCasasComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[
    CasasService,
  ],
  exports: [
    ExploradorCasasComponent
  ]
})
export class InventarioModule { }
