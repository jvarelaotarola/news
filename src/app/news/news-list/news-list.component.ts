import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NewsService } from '../news.service';
import { Article } from '../article';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  @Input() article : Article;
	@Output() deleteArticle = new EventEmitter<Article>();
	@Output() editArticle = new EventEmitter<Article>();
	public isDeleting = false;

	constructor(private newsService:NewsService) { }

	ngOnInit() {
		
	}

	delete(){
		this.isDeleting = true;
		this.deleteArticle.emit(this.article);
	}


	edit(){
		this.editArticle.emit(this.article);
	}
}
