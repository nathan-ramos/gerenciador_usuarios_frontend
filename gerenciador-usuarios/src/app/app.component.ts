import { Component } from '@angular/core';
import { ApiService } from './core/services/api.service';
import {Departamento} from './core/models/departamento';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private api: ApiService){}

  departamentos = [];
  departamento:Departamento;

  id: Number = null;

  title = 'gerenciador-usuarios';

  testando(){
    this.api.getById('/api/departamentos/',1).subscribe(a=> this.departamento = a);
    console.log(this.departamento);
  }

}
