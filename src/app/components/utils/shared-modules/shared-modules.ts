import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {BannerComponent} from '../banner/views/banner/banner.component';
import {BannerFullScreenComponent} from '../banner/views/banner-full-screen/banner-full-screen.component';

@NgModule({
  imports:      [
    CommonModule
  ],
  declarations: [
    BannerComponent,
    BannerFullScreenComponent
  ],
  exports:      [
    CommonModule,
    FormsModule,
    BannerComponent,
    BannerFullScreenComponent
  ]
})
export class SharedModule { }
