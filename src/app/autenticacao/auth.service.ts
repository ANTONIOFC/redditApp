import { UsuariosGuard } from './../guards/usuarios.guard';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
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
  private _apiUrl = 'https://guarded-journey-20729.herokuapp.com/api/';

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(
    private _http: Http,
    private router: Router,
    private logService: LogService
  ) { }

  logar(_usuario: Usuario) {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    this._http
        .post(this._apiUrl + '/logar', JSON.stringify(_usuario), options )
        .map((response: Response) => response.json().data)
        .subscribe(result => {

            this.usuario = result;

            if (this.usuario) {
              localStorage.setItem('usuarioAtual', JSON.stringify(this.usuario));
              this.mostrarMenuEmitter.emit(true);
              this.router.navigate(['/'])
            } else {
              this.mostrarMenuEmitter.emit(false);
            }
        });
  }

  deslogar() {
    localStorage.removeItem("usuarioAtual");
    this.mostrarMenuEmitter.emit(false);
    //this.router.navigate(['/']);
  }


   usuarioEstaAutenticado(){
      //console.log('Usuario esta autenticado: ');
      //console.log(localStorage.getItem('usuarioAtual'));
      if (localStorage.getItem('usuarioAtual')) {
          this.mostrarMenuEmitter.emit(true);
          //console.log('está');
          return true;
      }
     // console.log('não está');
      return false;
  }

  obterUsuarioAutenticado() {
    return JSON.parse(localStorage.getItem('usuarioAtual'));
  }
}
