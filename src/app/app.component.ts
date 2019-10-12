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

  /**
   initSoftwareUpdates() {
    this.swUpdateSoftware.available.subscribe(() => {
      // Update wurde entdeckt
      // Update herunterladen
      this.swUpdateSoftware.activateUpdate().then(() => {
        // Update wurde heruntergeladen
        const message = 'Application has been updated';
        const action = 'Ok, Reload!';

        // Benutzer auf Update hinweisen und Seite neu laden
        this.snackBar.open(message, action).onAction().subscribe(
          () => location.reload()
        );
      });
    });

    // Auf Updates prüfen
    this.swUpdateSoftware.checkForUpdate();
  }

   initPushNotificationService() {
    // This public key must be generatet from the scoop-backend
    // This key is also used in the backend to send notification to the push-service
    const key = 'BBc7Bb5f5...';

    this.swPushNotificationService.requestSubscription({
      serverPublicKey: key
    })
      .then(sub => {
          // Als Antwort wird ein Subscription-Objekt geliefert, das die PWA nun an das eigene Backend senden muss.
          console.log('Push Subscription', JSON.stringify(sub) );
        },
        err => {
          console.error('error registering for push', err);
        });
  }
   */

  isHeaderVisible() {
    return !(this.router.url === '/login');
  }

  isFooterVisible() {
    // return true;
    return !(this.router.url === '/login');
  }
}
