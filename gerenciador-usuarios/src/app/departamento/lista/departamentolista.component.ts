import { Component, OnInit } from '@angular/core';
import {DepartamentoService} from '../../core/services/departamento.service'
import { Departamento } from 'src/app/core/models/departamento';
import { pipe } from 'rxjs';


@Component({
  selector: 'app-departamentolista',
  templateUrl: './departamentolista.component.html',
  styleUrls: ['./departamentolista.component.css']
})
export class DepartamentoListaComponent implements OnInit {

  departamentos= [];

  constructor(private departamentoService: DepartamentoService) { }

  ngOnInit(){
    this.departamentoService.findAll().subscribe(d => this.departamentos = d)
  }

  teste(){
    this.departamentoService.findAll().subscribe(d => this.departamentos = d);
  }
  
}
