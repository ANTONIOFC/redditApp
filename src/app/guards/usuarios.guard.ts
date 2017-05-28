import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class UsuariosGuard implements CanActivateChild {

    	canActivateChild(
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean>|Promise<boolean>|boolean {
            //console.log('guarda de rota filha de usuários');
            console.log(route);
            console.log(state);
            console.log('guarda dos filhos de usuários');
            // fazendo um teste simples. Se a url tem a string editar
            /*if (state.url.includes('editar')) {
                // desabilito a rota
                alert('Usuário sem acesso');
                return false;
            }*/
            return true;
        }
}