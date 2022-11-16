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
