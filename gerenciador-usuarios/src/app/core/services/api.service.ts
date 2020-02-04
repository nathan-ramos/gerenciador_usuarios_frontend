import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import {catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private client: HttpClient) {}

  private hasErros(error: any){
    return throwError(error.error);
  }

  get(path: string,params: HttpParams = new HttpParams()): Observable<any>{
    return this.client.get(`${environment.api_url}${path}`,{params})
      .pipe(catchError(this.hasErros));
  }

  getById(path:string,id:Number,params: HttpParams = new HttpParams()): Observable<any>{
    return this.client.get(`${environment.api_url}${path}${id}`,{params})
      .pipe(catchError(this.hasErros));
  }

}
