import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Article } from './article';

@Injectable()
export class NewsService {

  constructor(private dataService:DataService) { }

	public getArticles(){
		return this.dataService.get('/api/articles');
	}

	public addArticle(article:Article){
		console.log('add article', article);
		return this.dataService.post('/api/articles',{'article':article});
	}

	public deleteArticle(article:Article){
		return this.dataService.delete('/api/articles/'+article._id);
	}

	public editArticle(article:Article){
		console.log('edit', article);
		return this.dataService.put('/api/articles/'+article._id,{'article':article});
	}

}
