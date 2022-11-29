import { Injectable } from '@angular/core';

export interface CardData {
  typeIcon: string;
  typeName: string;
  imageSrc: string;
  imageAlt: string;
  category: string;
  date: string;
  time?: string;
  title: string;
  content: string;
  actionName: string;
}

@Injectable({
  providedIn: 'root',
})
export class CardDataService {
  public blockCardsData = <CardData[]>[
    {
      typeIcon: 'mic',
      typeName: 'Podcast',
      imageSrc: 'assets/blog1.png',
      imageAlt: 'Image of a snail racing',
      category: 'Design',
      date: 'July 28, 2020',
      time: '20 min',
      title: 'What are color profiles and how they work in graphic design',
      content:
        'Aliquam vulputate hendrerit quam sollicitudin urna enim viverra gravida. Consectetur urna arcu eleifend...',
      actionName: 'Listen',
    },
    {
      typeIcon: 'mic',
      typeName: 'Podcast',
      imageSrc: 'assets/blog1.png',
      imageAlt: 'Image of a snail racing',
      category: 'Design',
      date: 'July 28, 2020',
      time: '20 min',
      title: 'What are color profiles and how they work in graphic design',
      content:
        'Aliquam vulputate hendrerit quam sollicitudin urna enim viverra gravida. Consectetur urna arcu eleifend...',
      actionName: 'Listen',
    },
    {
      typeIcon: 'mic',
      typeName: 'Podcast',
      imageSrc: 'assets/blog1.png',
      imageAlt: 'Image of a snail racing',
      category: 'Design',
      date: 'July 28, 2020',
      time: '20 min',
      title: 'What are color profiles and how they work in graphic design',
      content:
        'Aliquam vulputate hendrerit quam sollicitudin urna enim viverra gravida. Consectetur urna arcu eleifend...',
      actionName: 'Listen',
    },
    {
      typeIcon: 'mic',
      typeName: 'Podcast',
      imageSrc: 'assets/blog1.png',
      imageAlt: 'Image of a snail racing',
      category: 'Design',
      date: 'July 28, 2020',
      time: '20 min',
      title: 'What are color profiles and how they work in graphic design',
      content:
        'Aliquam vulputate hendrerit quam sollicitudin urna enim viverra gravida. Consectetur urna arcu eleifend...',
      actionName: 'Listen',
    },
    {
      typeIcon: 'mic',
      typeName: 'Podcast',
      imageSrc: 'assets/blog1.png',
      imageAlt: 'Image of a snail racing',
      category: 'Design',
      date: 'July 28, 2020',
      time: '20 min',
      title: 'What are color profiles and how they work in graphic design',
      content:
        'Aliquam vulputate hendrerit quam sollicitudin urna enim viverra gravida. Consectetur urna arcu eleifend...',
      actionName: 'Listen',
    },
    {
      typeIcon: 'mic',
      typeName: 'Podcast',
      imageSrc: 'assets/blog1.png',
      imageAlt: 'Image of a snail racing',
      category: 'Design',
      date: 'July 28, 2020',
      time: '20 min',
      title: 'What are color profiles and how they work in graphic design',
      content:
        'Aliquam vulputate hendrerit quam sollicitudin urna enim viverra gravida. Consectetur urna arcu eleifend...',
      actionName: 'Listen',
    },
    {
      typeIcon: 'mic',
      typeName: 'Podcast',
      imageSrc: 'assets/blog1.png',
      imageAlt: 'Image of a snail racing',
      category: 'Design',
      date: 'July 28, 2020',
      time: '20 min',
      title: 'What are color profiles and how they work in graphic design',
      content:
        'Aliquam vulputate hendrerit quam sollicitudin urna enim viverra gravida. Consectetur urna arcu eleifend...',
      actionName: 'Listen',
    },
    {
      typeIcon: 'mic',
      typeName: 'Podcast',
      imageSrc: 'assets/blog1.png',
      imageAlt: 'Image of a snail racing',
      category: 'Design',
      date: 'July 28, 2020',
      time: '20 min',
      title: 'What are color profiles and how they work in graphic design',
      content:
        'Aliquam vulputate hendrerit quam sollicitudin urna enim viverra gravida. Consectetur urna arcu eleifend...',
      actionName: 'Listen',
    },
    {
      typeIcon: 'mic',
      typeName: 'Podcast',
      imageSrc: 'assets/blog1.png',
      imageAlt: 'Image of a snail racing',
      category: 'Design',
      date: 'July 28, 2020',
      time: '20 min',
      title: 'What are color profiles and how they work in graphic design',
      content:
        'Aliquam vulputate hendrerit quam sollicitudin urna enim viverra gravida. Consectetur urna arcu eleifend...',
      actionName: 'Listen',
    },
  ];

  ourBlogCardData = <CardData[]>[
    {
      typeIcon: 'mic',
      typeName: 'Podcast',
      imageSrc: 'assets/blog1.png',
      imageAlt: 'Image of a snail racing',
      category: 'Design',
      date: 'July 28, 2020',
      time: '36 min',
      title: 'What are color profiles and how they work in graphic design',
      content:
        'Aliquam vulputate hendrerit quam sollicitudin urna enim viverra gravida. Consectetur urna arcu eleifend...',
      actionName: 'Listen',
    },
    {
      typeIcon: 'description',
      typeName: 'Article',
      imageSrc: 'assets/blog2.png',
      imageAlt: 'Image of a macbook',
      category: 'Development',
      date: 'September 1, 2020',
      title: 'How to choose the first programming language for a beginner',
      content:
        'Turpis sed at magna laoreet gravida consequat tortor placerat. Gravida vitae aliquet enim egestas dui...',
      actionName: 'Read',
    },
    {
      typeIcon: 'description',
      typeName: 'Article',
      imageSrc: 'assets/blog3.png',
      imageAlt: 'Image of dude flying with his hat for some reason',
      category: 'Design',
      date: 'August 8, 2020',
      title:
        'Should you choose a creative profession if you are attracted to creativity?',
      content:
        'Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. Tortor, viverra sed vulputate ultrices...',
      actionName: 'Read',
    },
  ];

  constructor() {}
}
