import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  private newsList: any;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsList = this.newsService.getNews();
    console.log('news list: ', this.newsList);
  }

}
