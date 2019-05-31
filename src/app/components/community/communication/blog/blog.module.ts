import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ROUTES_MODULE_BLOG } from './blog.routes';

/* Components */
import {BlogDashboardComponent} from './components/blog-dashboard/blog-dashboard.component';
import {PostComponent} from './components/post/post.component';
import {BlogComponent} from './components/blog/blog.component';
import {PostCategoryComponent} from './components/post-category/post-category.component';

/* Services */
import {SharedModule} from '../../../utils/shared-modules/shared-modules';
import {BlogService} from './services/blog.service';
import {BlogModifyComponent} from './components/blog-modify/blog-modify.component';

@NgModule({
  declarations: [
    BlogDashboardComponent,
    BlogComponent,
    PostCategoryComponent,
    PostComponent,
    BlogModifyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    ROUTES_MODULE_BLOG
  ],
  providers: [
    BlogService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class BlogModule {

}
