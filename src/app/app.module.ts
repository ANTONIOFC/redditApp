import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

//import { UsuariosComponent } from './usuarios/usuarios.component';

import { LogService } from './shared/log.service';
import { HomeComponent } from './home/home.component';
import { AutenticacaoComponent } from './autenticacao/autenticacao.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { AuthService } from './autenticacao/auth.service';
import { UsuariosService } from './usuarios/usuarios.service';
import { MateriasService } from './materias/materias.service';
import { AuthGuard } from './guards/auth.guard';
import { MateriasGuard } from './guards/materias.guard';
import { UsuariosGuard } from './guards/usuarios.guard';
import { SignUpComponent } from './autenticacao/sign-up/sign-up.component';
import { MateriasMediaComponent } from './materias-media/materias-media.component';
import { MateriasMediaDetalheComponent } from './materias-media-detalhe/materias-media-detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AutenticacaoComponent,
    CabecalhoComponent,
    SignUpComponent,
    MateriasMediaComponent,
    MateriasMediaDetalheComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    LogService,
    UsuariosService,
    MateriasService,
    AuthGuard,
    MateriasGuard,
    UsuariosGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
