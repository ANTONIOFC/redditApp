import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { RouterModule } from '@angular/router';

import { MateriasRoutingModule } from './materias.routing.module';
import { MateriaFormComponent } from './materia-form/materia-form.component';
import { MateriasComponent } from './materias.component';
import { MateriaDetalheComponent } from './materia-detalhe/materia-detalhe.component';
import { MateriaNaoEncontradaComponent } from './materia-nao-encontrada/materia-nao-encontrada.component';
//import { MateriasService } from './materias.service';
import { MateriasDeactivateGuard } from './../guards/materias.deactivate.guard';
import { MateriaNovaFormComponent } from './materia-nova-form/materia-nova-form.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MateriasRoutingModule,
    SharedModule
    //RouterModule
  ],
  declarations: [
    MateriasComponent,
    MateriaFormComponent,
    MateriaDetalheComponent,
    MateriaNaoEncontradaComponent,
    MateriaNovaFormComponent
  ],
  providers: [
    //MateriasService,
    MateriasDeactivateGuard
  ]


})
export class MateriasModule { }
