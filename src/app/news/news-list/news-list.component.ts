import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  @Input() newsList: any;
  private title = ' news';

  constructor() {
  }

  private setTitle():void {
    this.title = this.newsList[0].topic + this.title;
  }

  ngOnInit() {
    this.setTitle();
  }
}
