import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
//import { MateriaNaoEncontradaComponent } from './materias/materia-nao-encontrada/materia-nao-encontrada.component';
//import { MateriaDetalheComponent } from './materias/materia-detalhe/materia-detalhe.component';
//import { MateriasComponent } from './materias/materias.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AutenticacaoComponent } from './autenticacao/autenticacao.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    { path: 'materias', 
        loadChildren: 'app/materias/materias.module#MateriasModule',
        canActivate: [AuthGuard]
    },
    { path: 'usuarios', 
        loadChildren: 'app/usuarios/usuarios.module#UsuariosModule',
        canActivate: [AuthGuard]
    },
    { path: 'login', component: AutenticacaoComponent },    
   // { path: 'materias', component: MateriasComponent },
   // { path: 'materia/:id', component: MateriaDetalheComponent },
   // { path: 'materiaNaoEncontrada', component: MateriaNaoEncontradaComponent },
    { path: '', component: HomeComponent,
      canActivate: [AuthGuard]  
    }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
