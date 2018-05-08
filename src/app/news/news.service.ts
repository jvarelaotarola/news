import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Article } from './article';

@Injectable()
export class NewsService {

  constructor(private dataService:DataService) { }

	public getArticles(){
		return this.dataService.get('/api/users');
	}

	public addArticle(article:Article){
		console.log('article');
		return this.dataService.post('/api/articles',{'user':article});
	}

	public deleteArticle(article:Article){
		return this.dataService.delete('/api/articles/'+article._id);
	}

	public editArticle(article:Article){
		return this.dataService.put('/api/articles/'+article._id,{'article':article});
	}

}
