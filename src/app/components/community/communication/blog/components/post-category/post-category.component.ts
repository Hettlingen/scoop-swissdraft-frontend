import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostCategory} from '../../model/post-category';
import {BlogService} from '../../services/blog.service';

@Component({
  selector: 'app-post-category',
  templateUrl: 'post-category.component.html',
  styleUrls: ['post-category.component.scss']
})
export class PostCategoryComponent implements OnInit {

  private uuid: string;
  private sub: any;
  public postCategory: PostCategory;

  constructor(private routeClicked: ActivatedRoute,
              private serviceBlog: BlogService) {}

  ngOnInit() {
    this.sub = this.routeClicked.params.subscribe(params => {
      this.uuid = params['uuid'];
    });

    this.serviceBlog.getPostCategory(this.uuid).subscribe(data => this.postCategory = data);
  }
}
