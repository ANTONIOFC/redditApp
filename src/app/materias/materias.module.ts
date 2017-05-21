import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { RouterModule } from '@angular/router';

import { MateriasRoutingModule } from './materias.routing.module';
import { MateriasComponent } from './materias.component';
import { MateriaDetalheComponent } from './materia-detalhe/materia-detalhe.component';
import { MateriaNaoEncontradaComponent } from './materia-nao-encontrada/materia-nao-encontrada.component';
import { MateriasService } from './materias.service';

@NgModule({
  imports: [
    CommonModule,
    MateriasRoutingModule
    //RouterModule
  ],
  declarations: [
    MateriasComponent,
    MateriaDetalheComponent,
    MateriaNaoEncontradaComponent
  ],
  providers: [
    MateriasService
  ]


})
export class MateriasModule { }
