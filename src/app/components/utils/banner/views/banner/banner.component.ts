import {Component, Input, OnDestroy, OnInit} from '@angular/core';


@Component({
  selector: 'app-banner',
  templateUrl: 'banner.component.html',
  styleUrls: ['banner.component.scss']
})
export class BannerComponent implements OnDestroy, OnInit {

  @Input() fileNamePicture: string;

  urlBase = '../../../../../../assets/img/banner/';
  urlPicture: string;

  public ngOnInit() {
    this.urlPicture = this.urlBase.concat(this.fileNamePicture);
  }

  public ngOnDestroy() {

  }
}
