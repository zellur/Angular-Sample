import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostsComponent} from './posts.component';
import {PostsResolverService} from './posts-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
    resolve: { posts: PostsResolverService}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
