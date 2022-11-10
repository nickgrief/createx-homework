import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-footer',
  templateUrl: './sign-footer.component.html',
  styleUrls: ['./sign-footer.component.scss'],
})
export class SignFooterComponent implements OnInit {
  iconList = [
    {
      src: 'assets/facebook.svg',
      alt: 'Facebook icon',
    },
    {
      src: 'assets/google.svg',
      alt: 'Google icon',
    },
    {
      src: 'assets/twitter.svg',
      alt: 'Twitter icon',
    },
    {
      src: 'assets/linkedin.svg',
      alt: 'LinkedIn icon',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
