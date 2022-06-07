import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog.model';
import { BlogId } from 'src/app/models/readingList.model';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-list-blogs',
  templateUrl: './list-blogs.component.html',
  styleUrls: ['./list-blogs.component.css']
})
export class ListBlogsComponent implements OnInit {

  blogs!: Blog[];
  readingList!: BlogId[];

  // constructors are only used to instantiate the class and setup dependency injection
  constructor(private blogsService: BlogsService) { }

  // ngOnInit is a lifecycle hook that gets called after angular creates an instance of the class
  // any property initializations should be done here
  ngOnInit(): void {
    this.blogs = this.blogsService.data;
    this.readingList = this.blogsService.readingList;
  }

  addOrRemoveFromReadingList(id: BlogId) {
    if(this.readingList.includes(id)) // remove
      this.blogsService.readingList = this.blogsService.readingList.filter(item => item != id);
    else // add
      this.blogsService.readingList.push(id);
    this.readingList = this.blogsService.readingList;
  }

}
