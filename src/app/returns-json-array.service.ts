import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()
export class ReturnsJsonArrayService {

  constructor( private http: Http ) {}

  getData(): Observable<any> {
    return this.http.get('src/assets/data/disp2.json')
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }
}
