import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  isPasswordHidden = true;

  constructor() {}

  ngOnInit(): void {}

  switchPasswordVisibility() {
    this.isPasswordHidden = !this.isPasswordHidden;
  }
}
