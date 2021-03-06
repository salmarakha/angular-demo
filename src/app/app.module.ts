import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ListBlogsComponent } from './components/list-blogs/list-blogs.component';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { LikesComponent } from './components/likes/likes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReadingListComponent } from './components/reading-list/reading-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListBlogsComponent,
    AddBlogComponent,
    LikesComponent,
    ReadingListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
