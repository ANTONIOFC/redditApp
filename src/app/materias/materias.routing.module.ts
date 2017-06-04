import { MateriasDeactivateGuard } from './../guards/materias.deactivate.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanDeactivate } from '@angular/router';

import { MateriasComponent } from './materias.component';
import { MateriaDetalheComponent } from './materia-detalhe/materia-detalhe.component';
import { MateriaFormComponent } from './materia-form/materia-form.component';
import { MateriaNovaFormComponent } from './materia-nova-form/materia-nova-form.component';
//import { MateriaNaoEncontradaComponent } from './materia-nao-encontrada/materia-nao-encontrada.component';

const materiasRoutes: Routes = [
    { path: '', component: MateriasComponent, children: [
      { path: 'nova', component: MateriaNovaFormComponent },
      { path: ':id', component: MateriaDetalheComponent },
      { path: ':id/editar', component: MateriaFormComponent,
          canDeactivate: [MateriasDeactivateGuard]
      }
      //{ path: 'materiaNaoEncontrada', component: MateriaNaoEncontradaComponent }
    ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(materiasRoutes)
  ],
  exports: [RouterModule]
})
export class MateriasRoutingModule { }
