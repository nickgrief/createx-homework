import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss'],
})
export class BlogCardComponent implements OnInit {
  @Input() typeIcon = 'mic';
  @Input() typeName = 'Podcast';

  @Input() imageSrc = '/assets/blog1.png';
  @Input() imageAlt = 'Image of a snail racing';

  @Input() category = 'Design';
  @Input() date = 'July 28, 2020';
  @Input() time?: string;

  @Input() title =
    'What are color profiles and how they work in graphic design';
  @Input() content =
    'Aliquam vulputate hendrerit quam sollicitudin urna enim viverra gravida. Consectetur urna arcu eleifend...';

  @Input() actionName = 'Listen';

  constructor() {}

  ngOnInit(): void {}
}
