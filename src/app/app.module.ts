import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { MainComponent } from './main/main.component';
import {PostsModule} from './main/posts/posts.module';
import {TodosModule} from './main/todos/todos.module';
import {AlbumsModule} from './main/albums/albums.module';
import {ToastrModule} from 'ngx-toastr';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
import {clearState} from './store/app.reducer';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule,
    PostsModule,
    TodosModule,
    AlbumsModule,
    HttpClientModule,
    NgxDatatableModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-center',
      preventDuplicates: true
    }),
    StoreModule.forRoot({}, { metaReducers: [clearState] })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
