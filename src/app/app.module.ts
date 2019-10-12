import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';

import { FooterComponent } from './components/workplace/components/footer/footer.component';
import { HeaderComponent } from './components/workplace/components/header/header.component';
import { MenuComponent } from './components/workplace/components/header/menu/menu.component';
import { ContentComponent } from './components/workplace/components/content/content.component';
import {AuthenticationModule} from './components/authentication/authentication.module';
import {PageNotFoundComponent} from './components/utils/no-content';
import {HtmlSanitizer} from './components/utils/pipes/HtmlSanitizer';
import {ShowroomModule} from './components/shop/showroom/showroom.module';
import {ProductCatalogModule} from './components/shop/product-catalog/product-catalog.module';
import {AlertService} from './components/utils/error-handler/AlertService';
import {BusinessObjectSearchComponent} from './components/workplace/components/business-object-search/business-object-search.component';
import {PartnerModule} from './components/community/partner/partner.module';
import {BlogModule} from './components/community/communication/blog/blog.module';
import {AlertComponent} from './components/utils/error-handler/alert.component';
import {SharedModule} from './components/utils/shared-modules/shared-modules';
import {LoggedInGuard} from './components/utils/guards/LoggedInGuard';
import { ServicesComponent } from './components/cms/components/services/services.component';
import {ChatModule} from './components/community/communication/chat/chat.module';
import {NotificationsModule} from './components/community/communication/notifications/notifications.module';
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
    BusinessObjectSearchComponent,
    PageNotFoundComponent,
    HtmlSanitizer,
    AlertComponent,
    ServicesComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AuthenticationModule,
    PartnerModule,
    ProductCatalogModule,
    ShowroomModule,
    BlogModule,
    ChatModule,
    NotificationsModule,
    SharedModule
  ],
  providers: [
    AlertService,
    LoggedInGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
