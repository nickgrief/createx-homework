import { Component, OnInit } from '@angular/core';
import { IconsService } from '../services/icons.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  telephoneNumber = '(405) 555-0128';
  telephoneLink = `tel:4055550128`;

  email = 'hello@createx.com';

  mapState: ymaps.IMapState = {
    type: 'yandex#hybrid',
  };

  iconList = [
    'facebook',
    'twitter',
    'youtube',
    'telegram',
    'instagram',
    'linkedin',
    'google',
  ];

  constructor() {}

  ngOnInit(): void {}
}
