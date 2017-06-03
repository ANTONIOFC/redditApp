
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { LogService } from './../shared/log.service';
import { Usuario } from './../models/usuario';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UsuariosService {

  private _apiUrl = 'https://guarded-journey-20729.herokuapp.com/api/';

  constructor(
    private _http: Http,
    private logService: LogService) { }

  getAll() : Observable<Usuario[]> {
    this.logService.consoleLog('Listando os usuários');
    this.logService.consoleLog(this._apiUrl + 'usuarios');
    return this._http
        .get(this._apiUrl + 'usuarios')
        .map((response: Response) => <Usuario[]> response.json().data);      
  }

  getUsuario(id: string) : Observable<any> {
    this.logService.consoleLog('Obtendo usuário ' + id);
    return this._http
      .get(this._apiUrl + 'usuarios/' + id)
      .map((response: Response) => <any> response.json().data);
  }

  criar(_usuario: Usuario) {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    console.log(_usuario);

    return this._http.post(this._apiUrl + 'signup', JSON.stringify(_usuario), options)
              .map(this.extractData)
              .catch(this.handleErrorObservable);
  }

  atualizar(_usuario: Usuario) {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    console.log(_usuario);

    return this._http.put(this._apiUrl + 'usuarios/' + _usuario._id, JSON.stringify(_usuario), options)
              .map(this.extractData)
              .catch(this.handleErrorObservable);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  private handleErrorObservable (error: Response | any) {
    
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
}
