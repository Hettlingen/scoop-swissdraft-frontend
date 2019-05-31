import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BusinessObjectSearchComponent} from './components/workplace/components/business-object-search/business-object-search.component';
import {ServicesComponent} from './components/cms/components/services/services.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: ServicesComponent },
  { path: 'search',  component: BusinessObjectSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
