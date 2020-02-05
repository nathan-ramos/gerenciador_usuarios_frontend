import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DepartamentoListaComponent} from './departamento/lista/departamentolista.component'

const routes: Routes = [
  {path: 'departamentos',component: DepartamentoListaComponent },
  {path: '',redirectTo: '/departamentos',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
