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

  constructor() {}

  ngOnInit(): void {}
}
