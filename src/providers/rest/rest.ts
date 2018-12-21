import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class RestProvider {

  constructor(public http: Http) {
    console.log('Hello RestProvider Provider');
  }

  apiUrl = 'https://jsonplaceholder.typicode.com';
  
  getUsers() {
    return  this.http.get(this.apiUrl+'/users').
    do(this.logResponse)
    .map(this.extractData)
    .catch(this.catchError)
  }

  private logResponse(res: Response){
    console.log(res)
  }

  private catchError(error: Response | any){
    console.log(error);
    return Observable.throw(error.json());
  }

  private extractData(res: Response){
    return res.json();
  }


}
