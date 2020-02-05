import { Injectable } from '@angular/core';

import {ApiService} from './api.service';

import {Departamento} from '../models/departamento';

import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  apiUrlDepartamento = '/api/departamentos/';

  constructor(private api:ApiService) { }


  findAll(){
    return this.api.get(this.apiUrlDepartamento);
  
  }

  findById(id:Number): Observable<Departamento>{
    return this.api.getById(this.apiUrlDepartamento,id);
  }

}
