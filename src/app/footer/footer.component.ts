import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  telephoneNumber = '(405) 555-0128';
  telephoneLink = `tel:${this.telephoneNumber}`;

  iconList = [
    {
      src: 'assets/facebook.svg',
      alt: 'Facebook icon',
    },
    {
      src: 'assets/twitter-dark.svg',
      alt: 'Twitter icon',
    },
    {
      src: 'assets/youtube.svg',
      alt: 'Youtube icon',
    },
    {
      src: 'assets/telegram.svg',
      alt: 'Telegram icon',
    },
    {
      src: 'assets/instagram.svg',
      alt: 'Instagram icon',
    },
    {
      src: 'assets/linkedin.svg',
      alt: 'LinkedIn icon',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
