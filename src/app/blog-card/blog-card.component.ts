import { Component, Input, OnInit } from '@angular/core';
import { CardData } from '../services/card-data.service';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss'],
})
export class BlogCardComponent implements OnInit {
  @Input() cardData = <CardData>{
    typeIcon: 'mic',
    typeName: 'Podcast',
    imageSrc: 'assets/blog1.png',
    imageAlt: 'Image of a snail racing',
    category: 'Design',
    date: 'July 28, 2020',
    title: 'What are color profiles and how they work in graphic design',
    content:
      'Aliquam vulputate hendrerit quam sollicitudin urna enim viverra gravida. Consectetur urna arcu eleifend...',
    actionName: 'Listen',
  };

  constructor() {}

  ngOnInit(): void {}
}
