import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBlogComponent } from './compnonents/add-blog/add-blog.component';
import { ListBlogsComponent } from './compnonents/list-blogs/list-blogs.component';

const routes: Routes = [
  { path: "", component: ListBlogsComponent },
  { path: "blogs", component: ListBlogsComponent },
  { path: "create-blog", component: AddBlogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
