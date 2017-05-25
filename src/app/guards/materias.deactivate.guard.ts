import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { MateriaFormComponent } from './../materias/materia-form/materia-form.component';

@Injectable()
export class MateriasDeactivateGuard implements CanDeactivate<MateriaFormComponent> {
        canDeactivate(
            component: MateriaFormComponent,
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean>|Promise<boolean>|boolean {
            console.log('desativar matérias');
            return component.podeMudarRota();
    }
}
