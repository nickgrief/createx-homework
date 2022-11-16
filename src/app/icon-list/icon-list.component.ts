import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { IconsService } from '../icons.service';

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
