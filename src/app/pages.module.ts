import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FotosComponent } from './fotos/fotos.component';
import { TodosComponent } from './todos/todos.component';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    FotosComponent,
    TodosComponent,
    UsersComponent
  ],exports:[
    
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
