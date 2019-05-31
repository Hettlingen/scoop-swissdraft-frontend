import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {BlogService} from '../../services/blog.service';
import {Blog} from '../../model/blog';


@Component({
  selector: 'app-blog-dashboard',
  templateUrl: 'blog-dashboard.component.html',
  styleUrls: ['blog-dashboard.component.scss']
})

export class BlogDashboardComponent implements OnInit {

  listBlog: Observable<Blog[]>;

  constructor(private serviceBlog: BlogService) {}

  ngOnInit() {
    this.getListBlog();
  }

  getListBlog() {
    this.listBlog = this.serviceBlog.getListBlog();
  }
}
