import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  mapState: ymaps.IMapState = {
    type: 'yandex#hybrid',
  };

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
