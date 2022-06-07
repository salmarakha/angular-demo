import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog.model';
import { BlogId } from 'src/app/models/readingList.model';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.css']
})
export class ReadingListComponent implements OnInit {

  blogs!: Blog[];
  readingList!: BlogId[];

  constructor(private blogsService: BlogsService) { }

  ngOnInit(): void {
    this.blogs = this.blogsService.getReadingList();
    this.readingList = this.blogsService.readingList;
  }

  addOrRemoveFromReadingList(id: BlogId) {
    if(this.readingList.includes(id)) // remove
      this.blogsService.readingList = this.blogsService.readingList.filter(item => item != id);
    else // add
      this.blogsService.readingList.push(id);
    this.readingList = this.blogsService.readingList;
  }

  manageLikes(action: boolean, index: number) {
    this.blogs[index].liked = action;
    action? ++this.blogs[index].likes : --this.blogs[index].likes;
    this.blogsService.data = this.blogs;
  }

}
