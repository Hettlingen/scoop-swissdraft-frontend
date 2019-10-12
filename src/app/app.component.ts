import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
// import {MatSnackBar} from '@angular/material';
// import {SwPush, SwUpdate} from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
    './../assets/styles/form.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  constructor(private router: Router) {
    // this.initPushNotificationService();
    // this.initSoftwareUpdates();

    // Receives the messages of the notification-service
    // this.swPushNotificationService.messages.subscribe(notification => {
    //   console.log('received push notification', notification);
    // });
  }

  ngOnInit() {
    // this ensures that you get always on top of the page (scrolling)
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  isHeaderVisible() {
    return !(this.router.url === '/login');
  }

  isFooterVisible() {
    return !(this.router.url === '/login');
  }
}
