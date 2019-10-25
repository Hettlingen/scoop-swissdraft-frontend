import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ServicesComponent} from './components/cms/components/services/services.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: ServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
