import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutenticacaoComponent } from './autenticacao/autenticacao.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MateriasComponent } from './materias/materias.component';
import { MateriaDetalheComponent } from './materia-detalhe/materia-detalhe.component';
import { HomeComponent } from './home/home.component';
import { MateriaNaoEncontradaComponent } from './materia-nao-encontrada/materia-nao-encontrada.component';

const APP_ROUTES: Routes = [
    { path: 'autenticacao', component: AutenticacaoComponent },
    { path: 'usuarios', component: UsuariosComponent },
    { path: 'materias', component: MateriasComponent },
    { path: 'materia/:id', component: MateriaDetalheComponent },
    { path: 'materiaNaoEncontrada', component: MateriaNaoEncontradaComponent },
    { path: '', component: HomeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);