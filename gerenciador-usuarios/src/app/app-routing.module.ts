import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiService } from './core/services/api.service';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
