import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios.routing.module';
import { UsuariosComponent } from './usuarios.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuariosService } from './usuarios.service';
import { UsuarioDetalheComponent } from './usuario-detalhe/usuario-detalhe.component';

@NgModule({
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ],
  declarations: [
    UsuariosComponent,
    UsuarioFormComponent,
    UsuarioDetalheComponent
  ],
  providers: [
    UsuariosService
  ]
})
export class UsuariosModule { }
