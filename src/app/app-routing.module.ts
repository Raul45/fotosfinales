import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FotosComponent} from './fotos/fotos.component';
import {TodosComponent} from './todos/todos.component';
import {UsersComponent} from './users/users.component';
const routes: Routes = [
  {
    path:'fotos',
    component: FotosComponent
  },
  {
    path:'todos',
    component:TodosComponent
  },{
    path:'users',
    component:UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
