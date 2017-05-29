import { Materia } from './../models/materia';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/toPromise';

import { LogService } from './../shared/log.service';

@Injectable()
export class MateriasService {

  private _apiUrl = 'https://guarded-journey-20729.herokuapp.com/api/materias';

  constructor(
    private _http: Http,
    private logService: LogService
  ) { }

  getAll() : Observable<any[]> {

    return this._http
      .get(this._apiUrl)
      .map((response: Response) => <any[]> response.json().data);
  }

  getMateria(id: string) : Observable<any> {
 
    return this._http
      .get(this._apiUrl + '/' + id)
      .map((response: Response) => <any> response.json().data)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
  }

  criar(_materia: Materia) {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post(this._apiUrl, JSON.stringify(_materia), options)
              .map(this.extractData)
              .catch(this.handleErrorObservable);
  }

  atualizar(_materia: Materia) {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    console.log(_materia);

    return this._http.put(this._apiUrl + '/' + _materia._id, JSON.stringify(_materia), options)
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
