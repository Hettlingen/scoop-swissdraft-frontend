import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';

import {FooterComponent} from './components/workplace/components/footer/footer.component';
import {HeaderComponent} from './components/workplace/components/header/header.component';
import {MenuComponent} from './components/workplace/components/header/menu/menu.component';
import {ContentComponent} from './components/workplace/components/content/content.component';
import {SharedModule} from './components/utils/shared-modules/shared-modules';
import {ServicesComponent} from './components/cms/components/services/services.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ContentComponent,
    FooterComponent,
    ServicesComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
