import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  readingListCount: number = 0;

  constructor(public blogService: BlogsService, public router: Router) { }

  ngOnInit(): void {
    this.readingListCount = this.blogService.readingList.length;
  }

}
