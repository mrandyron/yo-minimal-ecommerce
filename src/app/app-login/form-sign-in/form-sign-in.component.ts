import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-form-sign-in',
  templateUrl: './form-sign-in.component.html',
  styleUrls: ['./form-sign-in.component.css']
})
export class FormSignInComponent implements OnInit {
  nacArray = ['V', 'E', 'J', 'G'];
  formBasicUser: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  validateCredentials(): void {
    this.formBasicUser = true;
  }

}
