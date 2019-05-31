import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BlogService} from '../../services/blog.service';
import {Post} from '../../model/post';

@Component({
  selector: 'app-post',
  templateUrl: 'post.component.html',
  styleUrls: ['post.component.scss']
})
export class PostComponent implements OnInit {

  private uuid: string;
  private sub: any;
  public post: Post;

  constructor(private routeClicked: ActivatedRoute,
              private serviceBlog: BlogService) {
  }

  ngOnInit() {
    this.sub = this.routeClicked.params.subscribe(params => {
      this.uuid = params['uuid'];
    });

    this.serviceBlog.getPost(this.uuid).subscribe(data => this.post = data);
  }
}
