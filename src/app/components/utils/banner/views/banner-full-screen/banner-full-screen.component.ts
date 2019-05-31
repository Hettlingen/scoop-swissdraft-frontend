import {Component, Input, OnDestroy, OnInit} from '@angular/core';


@Component({
  selector: 'app-banner-full-screen',
  templateUrl: 'banner-full-screen.component.html',
  styleUrls: ['banner-full-screen.component.scss']
})
export class BannerFullScreenComponent implements OnDestroy, OnInit {

  @Input() fileNamePicture: string;

  urlBase = '../../../../../../assets/img/banner/';
  urlPicture: string;

  public ngOnInit() {
    this.urlPicture = this.urlBase.concat(this.fileNamePicture);
  }

  public ngOnDestroy() {

  }
}
