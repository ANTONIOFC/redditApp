import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterializeModule } from 'angular2-materialize';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuariosService } from './usuarios/usuarios.service';
import { LogService } from './shared/log.service';
import { HomeComponent } from './home/home.component';
import { MateriasComponent } from './materias/materias.component';
import { routing } from './app.routing';
import { AutenticacaoComponent } from './autenticacao/autenticacao.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { MateriaDetalheComponent } from './materia-detalhe/materia-detalhe.component';
import { MateriasService } from './materias/materias.service';
import { MateriaNaoEncontradaComponent } from './materia-nao-encontrada/materia-nao-encontrada.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    HomeComponent,
    MateriasComponent,
    AutenticacaoComponent,
    CabecalhoComponent,
    MateriaDetalheComponent,
    MateriaNaoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //AppRoutingModule,
    MaterializeModule,
    routing
  ],
  providers: [
    UsuariosService,
    MateriasService,
    LogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
