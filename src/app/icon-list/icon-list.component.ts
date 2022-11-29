import { Component, Input, OnInit } from '@angular/core';
import { IconsService } from '../services/icons.service';

@Component({
  selector: 'app-icon-list',
  templateUrl: './icon-list.component.html',
  styleUrls: ['./icon-list.component.scss'],
})
export class IconListComponent implements OnInit {
  @Input() iconList: string[] = [];
  @Input() color: 'white' | 'gray' | 'dim' = 'white';

  constructor(private icons: IconsService) {}

  ngOnInit(): void {}
}
