import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
//import { MateriaNaoEncontradaComponent } from './materias/materia-nao-encontrada/materia-nao-encontrada.component';
//import { MateriaDetalheComponent } from './materias/materia-detalhe/materia-detalhe.component';
//import { MateriasComponent } from './materias/materias.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AutenticacaoComponent } from './autenticacao/autenticacao.component';

const routes: Routes = [
    { path: 'materias', loadChildren: 'app/materias/materias.module#MateriasModule' },
    { path: 'usuarios', loadChildren: 'app/usuarios/usuarios.module#UsuariosModule' },
    { path: 'autenticacao', component: AutenticacaoComponent },    
   // { path: 'materias', component: MateriasComponent },
   // { path: 'materia/:id', component: MateriaDetalheComponent },
   // { path: 'materiaNaoEncontrada', component: MateriaNaoEncontradaComponent },
    { path: '', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
