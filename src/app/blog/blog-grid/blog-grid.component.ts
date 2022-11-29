import { Component, OnInit } from '@angular/core';
import { CardData, CardDataService } from 'src/app/services/card-data.service';

@Component({
  selector: 'app-blog-grid',
  templateUrl: './blog-grid.component.html',
  styleUrls: ['./blog-grid.component.scss'],
})
export class BlogGridComponent implements OnInit {
  blockCardData!: CardData[];

  constructor(private cardData: CardDataService) {}

  ngOnInit(): void {
    this.blockCardData = this.cardData.blockCardsData;
  }
}
