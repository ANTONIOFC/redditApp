import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Usuario } from './../models/usuario';
import { LogService } from './../shared/log.service';

@Injectable()
export class AuthService {

  private usuario: Usuario = new Usuario();
  private isAutenticado: Boolean = false;
  private _apiUrl = 'https://guarded-journey-20729.herokuapp.com/api/auth/';

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(
    private _http: Http,
    private router: Router,
    private logService: LogService
  ) { }

  logar(_usuario: Usuario) {
    this.logService.consoleLog('tentando logar ...');
    //this._http.get(this._apiUrl + _usuario.logon)
    //    .map((res:Response) => this.usuario = res.json().data);

     this._http
        .get(this._apiUrl + _usuario.logon)
          .map((response: Response) => <Usuario> response.json().data)
          .subscribe(
            (result) => { 
              this.usuario = result;
              this.logService.consoleLog('após logar ...');
              this.logService.consoleLog(this.usuario.nome);
              if (this.usuario.logon == _usuario.logon){
                this.isAutenticado = true;
                this.mostrarMenuEmitter.emit(true);
                this.router.navigate(['/'])
              } else {
                this.isAutenticado = false;
                this.mostrarMenuEmitter.emit(false);
              }
          }
        );
  }

   usuarioEstaAutenticado(){
      return this.isAutenticado;
  }
}
