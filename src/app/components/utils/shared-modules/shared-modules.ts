import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {LoadingSpinnerComponent} from '../loading-spinner/loading-spinner.component';
import {SnackbarComponent} from '../snackbar/snackbar.component';
import {BannerComponent} from '../banner/views/banner/banner.component';
import {BannerFullScreenComponent} from '../banner/views/banner-full-screen/banner-full-screen.component';

@NgModule({
  imports:      [
    CommonModule
  ],
  declarations: [
    LoadingSpinnerComponent,
    SnackbarComponent,
    LoadingSpinnerComponent,
    BannerComponent,
    BannerFullScreenComponent
  ],
  exports:      [
    LoadingSpinnerComponent,
    CommonModule,
    FormsModule,
    SnackbarComponent,
    BannerComponent,
    BannerFullScreenComponent
  ]
})
export class SharedModule { }
