import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpatientComponent } from './addpatient.component';

const routes: Routes = [
  {path:'',component:AddpatientComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddpatientRoutingModule { }
