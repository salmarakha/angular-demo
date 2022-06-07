import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { ListBlogsComponent } from './components/list-blogs/list-blogs.component';
import { ReadingListComponent } from './components/reading-list/reading-list.component';

const routes: Routes = [
  { path: "", redirectTo: "blogs", pathMatch: "full" },
  { path: "blogs", component: ListBlogsComponent },
  { path: "create-blog", component: AddBlogComponent },
  { path: "reading-list", component: ReadingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
