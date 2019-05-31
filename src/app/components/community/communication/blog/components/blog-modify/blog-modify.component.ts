import { Component, OnInit } from '@angular/core';
import {BlogService} from '../../services/blog.service';
import {Blog} from '../../model/blog';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertService} from '../../../../../utils/error-handler/AlertService';


@Component({
  selector: 'app-blog-modify',
  templateUrl: 'blog-modify.component.html',
  styleUrls: ['blog-modify.component.scss']
})

export class BlogModifyComponent implements OnInit {

  private uuid: string;
  private sub: any;
  public formBlog: FormGroup;
  public blog: Blog;

  constructor(private router: Router,
              private routeClicked: ActivatedRoute,
              private formBuilder: FormBuilder,
              private serviceBlog: BlogService,
              private serviceAlert: AlertService) {

  }

  ngOnInit() {
    this.formBlog = this.formBuilder.group({
      'title' : [null, [Validators.required]],
      'description' : [null, [Validators.required]]
    });

    this.sub = this.routeClicked.params.subscribe(params => {
      this.uuid = params['uuid'];
    });

    if (this.uuid != null) {
      this.serviceBlog.getBlog(this.uuid).subscribe(data => this.blog = data);
    } else {
      this.blog = new Blog();
    }
  }

  actionSave() {
    this.serviceBlog
      .saveBlog(this.formBlog.value)
      .subscribe((data: Blog) => this.blog = data,
        error => console.log(error),
        () => this.serviceAlert.success('Product is successfully saved.', true));
  }

  actionCancel() {
    this.router.navigate(['blogDashboard']);
  }
}
