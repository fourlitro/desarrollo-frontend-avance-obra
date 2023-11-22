import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleCasasComponent } from './detalle-casas/detalle-casas.component';
import { ExploradorCasasComponent } from './explorador-casas/explorador-casas.component';
import { FiltradoCasasComponent } from './filtrado-casas/filtrado-casas.component';
import { ListadoCasasComponent } from './listado-casas/listado-casas.component';



@NgModule({
  declarations: [
    DetalleCasasComponent,
    ExploradorCasasComponent,
    FiltradoCasasComponent,
    ListadoCasasComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExploradorCasasComponent
  ]
})
export class InventarioModule { }
