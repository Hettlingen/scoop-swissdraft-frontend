import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { UserPasswordRequestComponent } from './user-password-request.component';

describe('Component: UserPasswordRequest', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [UserPasswordRequestComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([UserPasswordRequestComponent],
      (component: UserPasswordRequestComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(UserPasswordRequestComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(UserPasswordRequestComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-user-password-request></app-user-password-request>
  `,
  directives: [UserPasswordRequestComponent]
})
class UserPasswordRequestComponentTestController {
}

