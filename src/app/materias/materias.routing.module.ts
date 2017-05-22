import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MateriasComponent } from './materias.component';
import { MateriaDetalheComponent } from './materia-detalhe/materia-detalhe.component';
import { MateriaFormComponent } from './materia-form/materia-form.component';
import { MateriaNaoEncontradaComponent } from './materia-nao-encontrada/materia-nao-encontrada.component';

const materiasRoutes: Routes = [
    { path: 'materias', component: MateriasComponent, children: [
      { path: 'nova', component: MateriaFormComponent },
      { path: ':id', component: MateriaDetalheComponent },
      { path: ':id/editar', component: MateriaFormComponent },
      { path: 'materiaNaoEncontrada', component: MateriaNaoEncontradaComponent }
    ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(materiasRoutes)
  ],
  exports: [RouterModule]
})
export class MateriasRoutingModule { }
