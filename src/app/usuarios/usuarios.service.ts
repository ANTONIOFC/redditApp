
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { LogService } from './../shared/log.service';
import { Usuario } from './usuario';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UsuariosService {

  private _apiUrl = 'https://guarded-journey-20729.herokuapp.com/api/usuarios';

  constructor(
    private _http: Http,
    private logService: LogService) { }


  logar(logon:string) {
    return this._http.get(this._apiUrl + '/' + logon)
      .map((res:Response) => res.json().data);
  }

  getAll() : Observable<Usuario[]> {
    this.logService.consoleLog('Listando os usuários');
    this.logService.consoleLog(this._apiUrl);
    return this._http
        .get(this._apiUrl)
        .map((response: Response) => <Usuario[]> response.json().data);      
  }
}
