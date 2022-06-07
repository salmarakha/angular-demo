import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './compnonents/header/header.component';
import { ListBlogsComponent } from './compnonents/list-blogs/list-blogs.component';
import { AddBlogComponent } from './compnonents/add-blog/add-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListBlogsComponent,
    AddBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
