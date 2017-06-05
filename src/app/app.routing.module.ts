import { MateriasMediaDetalheComponent } from './materias-media-detalhe/materias-media-detalhe.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivateChild } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AutenticacaoComponent } from './autenticacao/autenticacao.component';
import { SignUpComponent } from './autenticacao/sign-up/sign-up.component';
import { AuthGuard } from './guards/auth.guard';
import { MateriasGuard } from './guards/materias.guard';

const routes: Routes = [
    { path: 'materias', 
        loadChildren: 'app/materias/materias.module#MateriasModule',
        canActivate: [AuthGuard],
        canActivateChild: [MateriasGuard]
    },
    { path: 'usuarios', 
        loadChildren: 'app/usuarios/usuarios.module#UsuariosModule',
        canActivate: [AuthGuard]
        //canActivateChild: [UsuariosGuard]
    },
    { path: 'postagem/:id', component: MateriasMediaDetalheComponent},
    { path: 'login', component: AutenticacaoComponent },
    { path: 'signUp', component: SignUpComponent },
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
