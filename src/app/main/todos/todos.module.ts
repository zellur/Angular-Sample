import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import {TodosComponent} from './todos.component';
import {StoreModule} from '@ngrx/store';
import {todosReducers} from './store/todos.reducer';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [TodosComponent],
  imports: [
    CommonModule,
    TodosRoutingModule,
    StoreModule.forFeature('todos', todosReducers),
    NgxDatatableModule,
    MatCheckboxModule,
    FormsModule
  ],
})
export class TodosModule { }
