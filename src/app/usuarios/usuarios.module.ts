import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsuariosRoutingModule } from './usuarios.routing.module';
import { UsuariosComponent } from './usuarios.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioDetalheComponent } from './usuario-detalhe/usuario-detalhe.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UsuariosRoutingModule,
    SharedModule
  ],
  declarations: [
    UsuariosComponent,
    UsuarioFormComponent,
    UsuarioDetalheComponent
  ],
  providers: [
    //UsuariosService
  ]
})
export class UsuariosModule { }
