import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {BlogService} from '../../services/blog.service';
import {Post} from '../../model/post';
import {Blog} from '../../model/blog';


@Component({
  selector: 'app-blog',
  templateUrl: 'blog.component.html',
  styleUrls: ['blog.component.scss']
})

export class BlogComponent implements OnInit {

  blog: Blog;
  listPostNewest: Observable<Post[]>;
  UUID_BLOG = '550e8400-e29b-11d4-a716-446655450000';

  constructor(private serviceBlog: BlogService) {

  }

  ngOnInit() {
    this.getBlog();
    this.getListPostNewest();
  }

  getBlog() {
    this.serviceBlog.getBlog(this.UUID_BLOG)
      .subscribe(blog => {
        this.blog = blog;
      });
  }

  getListPostNewest() {
    // this.listPostNewest = this.serviceBlog.getListPostNewest(this.UUID_BLOG);
  }
}
