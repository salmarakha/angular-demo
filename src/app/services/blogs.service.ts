import { Injectable } from '@angular/core';
import { Blog } from '../models/blog.model';
import { BlogId } from '../models/readingList.model';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  // these data should come from api call
  data: Blog[] = [
    {id: 1, title: "Components", content: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", lastUpdated: "Last updated 3 mins ago"},
    {id: 2, title: "Directives", content: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", lastUpdated: "Last updated 3 mins ago"},
    {id: 3, title: "Pipes", content: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", lastUpdated: "Last updated 3 mins ago"},
  ]
  readingList: BlogId[] = [2];

  constructor() { }
}
