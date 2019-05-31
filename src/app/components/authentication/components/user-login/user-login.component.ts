import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from '../../services/login.service';
import {AlertService} from '../../../utils/error-handler/AlertService';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  public formLogin: FormGroup;
  public loading = false;
  public previousUrl: string;
  public snackbarText = 'SCOOP Solutions';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private serviceLogin: LoginService,
    private serviceAlert: AlertService,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    // init form
    this.formLogin = this.formBuilder.group({
      'userName' : [null, [Validators.required]],
      'password' : [null, [Validators.required, Validators.minLength(5)]]
    });

    // get return url from route parameters or default to '/'
    this.previousUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;

    this.serviceLogin
      .login(this.formLogin.value)
      .subscribe(
        data => {
          // localStorage.setItem('currentUser', JSON.stringify(data));
          localStorage.setItem('currentUser', String(true));
          this.loading = false;
          this.router.navigate([this.previousUrl]);
        },
        error => {
          // TODO Evaluate error code and use appropriate messages
          this.serviceAlert.error('Zur Zeit können Sie sich nicht anmelden. Versuchen Sie es später nochmals.' + error);
          this.loading = false;
        });
  }
}
