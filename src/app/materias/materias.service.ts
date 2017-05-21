import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { LogService } from './../shared/log.service';

@Injectable()
export class MateriasService {

  private _apiUrl = 'https://guarded-journey-20729.herokuapp.com/api/posts';

  constructor(
    private _http: Http,
    private logService: LogService
  ) { }

  getAll() : Observable<any[]> {
    this.logService.consoleLog('Listando as matérias');
    return this._http
      .get(this._apiUrl)
      .map((response: Response) => <any[]> response.json().data);
  }

  getMateria(id: string) : Observable<any> {
    this.logService.consoleLog('Obtendo matéria ' + id);
    return this._http
      .get(this._apiUrl + '/' + id)
      .map((response: Response) => <any> response.json().data)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
