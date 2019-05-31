import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import {BlogDashboardComponent} from './components/blog-dashboard/blog-dashboard.component';
import {PostComponent} from './components/post/post.component';
import {BlogComponent} from './components/blog/blog.component';
import {PostCategoryComponent} from './components/post-category/post-category.component';
import {BlogModifyComponent} from './components/blog-modify/blog-modify.component';


export const ROUTES_CONFIG_BLOG: Routes = [
  { path: 'blogDashboard',  component: BlogDashboardComponent },
  { path: 'blog',  component: BlogComponent },
  { path: 'blogModify/:uuid',  component: BlogModifyComponent },
  { path: 'postCategory/:uuid', component: PostCategoryComponent },
  { path: 'post/:uuid',  component: PostComponent }
];

export const ROUTES_MODULE_BLOG: ModuleWithProviders = RouterModule.forChild(ROUTES_CONFIG_BLOG);

