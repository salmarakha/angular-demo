import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Blog } from 'src/app/models/blog.model';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  blogForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required, Validators.maxLength(200)])
  })

  constructor(private blogService: BlogsService, private router: Router) { }

  ngOnInit(): void {
  }

  create() {
    if (this.blogForm.valid) {
      const blog: Partial<Blog> = this.blogForm.value;
      this.blogService.addBlog(blog);
      this.router.navigateByUrl('/blogs');
    } else {
      this.blogForm.controls['title'].markAsTouched();
      this.blogForm.controls['content'].markAsTouched();
    }

  }

}
