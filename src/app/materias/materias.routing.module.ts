import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MateriasComponent } from './materias.component';
import { MateriaDetalheComponent } from './materia-detalhe/materia-detalhe.component';
import { MateriaNaoEncontradaComponent } from './materia-nao-encontrada/materia-nao-encontrada.component';

const materiasRoutes: Routes = [
    { path: 'materias', component: MateriasComponent },
    { path: 'materia/:id', component: MateriaDetalheComponent },
    { path: 'materiaNaoEncontrada', component: MateriaNaoEncontradaComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(materiasRoutes)
  ],
  exports: [RouterModule]
})
export class MateriasRoutingModule { }
