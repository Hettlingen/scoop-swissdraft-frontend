import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';
import {
  Router, ActivatedRoute, Event, NavigationStart, NavigationEnd, NavigationCancel,
  NavigationError
} from '@angular/router';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {AlertService} from '../../../utils/error-handler/AlertService';

@Component({
  selector: 'app-user-password-request',
  templateUrl: 'user-password-request.component.html',
  styleUrls: ['user-password-request.component.scss']
})
export class UserPasswordRequestComponent implements OnInit {

  private loading = false;
  private returnUrl: string;
  public formPasswordRequest: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private serviceLogin: LoginService,
    private serviceAlert: AlertService,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.formPasswordRequest = this.formBuilder.group({
      'email' : [null, [Validators.required]]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    this.router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
  }

  passwordRequest() {
    this.loading = true;

    this.serviceLogin
      .login(this.formPasswordRequest.value)
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.serviceAlert.error(error);
        });
  }

  navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this.loading = true;
    }
    if (event instanceof NavigationEnd) {
      this.loading = false;
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.loading = false;
    }
    if (event instanceof NavigationError) {
      this.loading = false;
    }
  }
}
