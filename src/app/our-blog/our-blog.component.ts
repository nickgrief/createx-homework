import { Component, OnInit } from '@angular/core';
import { CardData, CardDataService } from '../services/card-data.service';

@Component({
  selector: 'app-our-blog',
  templateUrl: './our-blog.component.html',
  styleUrls: ['./our-blog.component.scss'],
})
export class OurBlogComponent implements OnInit {
  cardsData!: CardData[];
  constructor(private data: CardDataService) {}

  ngOnInit(): void {
    this.cardsData = this.data.ourBlogCardData;
  }
}
