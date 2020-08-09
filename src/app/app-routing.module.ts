import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./main/posts/posts.module').then(m => m.PostsModule)
      },
      {
        path: 'todos',
        loadChildren: () => import('./main/todos/todos.module').then( m => m.TodosModule)
      },
      {
        path: 'albums',
        loadChildren: () => import('./main/albums/albums.module').then(m => m.AlbumsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
