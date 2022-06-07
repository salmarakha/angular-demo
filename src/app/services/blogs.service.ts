import { Injectable } from '@angular/core';
import { Blog } from '../models/blog.model';
import { BlogId } from '../models/readingList.model';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  // these data should come from api call
  data: Blog[] = [
    {id: 1, title: "Components", content: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", lastUpdated: "Last updated 3 hours ago", likes: 1, liked: true},
    {id: 2, title: "Directives", content: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", lastUpdated: "Last updated 5 days ago", likes: 25, liked: false},
    {id: 3, title: "Pipes", content: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", lastUpdated: "Last updated 2 days ago", likes: 150, liked: false},
  ]
  readingList: BlogId[] = [2];

  constructor() { }

  addBlog(blog: Partial<Blog>) {
    blog = { ...blog, id: this.data[this.data.length -1].id + 1, liked: false, likes: 0, lastUpdated: "Last updated 1 min ago" }
    this.data.unshift(blog as Blog);
  }
}
