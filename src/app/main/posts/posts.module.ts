import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import {PostsComponent} from './posts.component';
import {FormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {postReducers} from './store/posts.reducer';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    FormsModule,
    StoreModule.forFeature('posts', postReducers),
    MatFormFieldModule,
    MatExpansionModule,
    MatInputModule,
  ]
})
export class PostsModule { }
