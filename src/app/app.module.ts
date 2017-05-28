import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';

import { MaterializeModule } from 'angular2-materialize';
//import { UsuariosComponent } from './usuarios/usuarios.component';
//import { UsuariosService } from './usuarios/usuarios.service';
import { LogService } from './shared/log.service';
import { HomeComponent } from './home/home.component';
//import { routing } from './app.routing';
import { AutenticacaoComponent } from './autenticacao/autenticacao.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
//import { MateriasModule } from './materias/materias.module';
//import { UsuariosModule } from './usuarios/usuarios.module';
//import { MateriasComponent } from './materias/materias.component';
//import { MateriaDetalheComponent } from './materias/materia-detalhe/materia-detalhe.component';
//import { MateriaNaoEncontradaComponent } from './materias/materia-nao-encontrada/materia-nao-encontrada.component';
//import { MateriasService } from './materias/materias.service';
import { AuthService } from './autenticacao/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { MateriasGuard } from './guards/materias.guard';
import { UsuariosGuard } from './guards/usuarios.guard';
import { SignUpComponent } from './autenticacao/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    //UsuariosComponent,
    HomeComponent,
    AutenticacaoComponent,
    CabecalhoComponent,
    SignUpComponent    
    //MateriasComponent,
    //MateriaDetalheComponent,
    //MateriaNaoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //MateriasModule,
    //UsuariosModule,
    AppRoutingModule,
    MaterializeModule  
    //routing
  ],
  providers: [
    //UsuariosService,
    //MateriasService,
    AuthService,
    LogService,
    AuthGuard,
    MateriasGuard,
    UsuariosGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
