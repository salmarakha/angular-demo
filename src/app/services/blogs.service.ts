import { Injectable } from '@angular/core';
import { Blog } from '../models/blog.model';
import { BlogId } from '../models/readingList.model';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  // data should come from an api call
  data: Blog[] = [
    {id: 1, title: "Components", content: "Components are the main building block for Angular applications.", lastUpdated: "Last updated 3 hours ago", likes: 1, liked: true},
    {id: 2, title: "Directives", content: "Directives are classes that add additional behavior to elements in your Angular applications. ", lastUpdated: "Last updated 5 days ago", likes: 25, liked: false},
    {id: 3, title: "Pipes", content: "Pipes are simple functions to use in template expressions to accept an input value and return a transformed value.", lastUpdated: "Last updated 2 days ago", likes: 150, liked: false},
    {id: 4, title: "Dependency Injection", content: "Dependencies are services or objects that a class needs to perform its function. Dependency injection, or DI, is a design pattern in which a class requests dependencies from external sources rather than creating them.", lastUpdated: "Last updated 5 hours ago", likes: 1000, liked: true},
    {id: 5, title: "Routing", content: "In a single-page app, you change what the user sees by showing or hiding portions of the display that correspond to particular components, rather than going out to the server to get a new page.", lastUpdated: "Last updated 5 hours ago", likes: 723, liked: true},
    {id: 6, title: "Reactive Forms", content: "Reactive forms provide a model-driven approach to handling form inputs whose values change over time. ", lastUpdated: "Last updated 5 hours ago", likes: 850, liked: false},
    {id: 7, title: "Services", content: "A service is typically a class with a narrow, well-defined purpose. It should do something specific and do it well.", lastUpdated: "Last updated 7 hours ago", likes: 50, liked: false},
  ]
  readingList: BlogId[] = [2];

  constructor() { }

  // this should be a POST api call to the backend
  addBlog(blog: Partial<Blog>) {
    blog = { ...blog, id: this.data[this.data.length -1].id + 1, liked: false, likes: 0, lastUpdated: "Last updated 1 min ago" }
    this.data.push(blog as Blog);
  }

  // get readinList blogs only
  getReadingList() {
    return this.data.filter(item => this.readingList.includes(item.id));
  }
}
