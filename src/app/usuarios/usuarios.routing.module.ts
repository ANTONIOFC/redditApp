import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuariosComponent } from './usuarios.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioDetalheComponent } from './usuario-detalhe/usuario-detalhe.component';
import { UsuariosGuard } from './../guards/usuarios.guard';

const usuariosRoutes: Routes = [
    { path: '', component: UsuariosComponent,
      canActivateChild: [UsuariosGuard],
      children: [
        { path: 'novo', component: UsuarioFormComponent },
        { path: ':id', component: UsuarioDetalheComponent },
        { path: ':id/editar', component: UsuarioFormComponent }
    ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(usuariosRoutes)
  ],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
