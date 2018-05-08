import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Article } from '../article';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public articles : Article[];
	public selectedArticle : Article = new Article();
	public loading : boolean = false;

	constructor(private newsService:NewsService) { }

	ngOnInit() {
		this.getArticles();
	}

	public editArticle(article){
		console.log('edit',article);
		this.selectedArticle = Object.assign({}, article);
	}

	public editArticleSave(article){
		this.newsService.editArticle(article.article)
			.then(data => {
				article.form.reset();
				this.getArticles();
			})
			.catch(error => {
				console.log('error',error);
			});
	}

	public deleteArticle(article){
		this.newsService.deleteArticle(article)
			.then(data => {
				this.getArticles();
			})
			.catch(error => {
				console.log('error',error);
			});
	}

	public getArticles(){
		this.newsService.getArticles().subscribe((data) => {
				console.log('data',data);
				this.articles = data.user;
			});
	}

	public addArticle(article:any){
		this.loading = true;
		delete article.article._id;
		this.newsService.addArticle(article.article)
			.then(data => {
				console.log('article agregado');
				article.form.reset();
				this.loading = false;
				this.getArticles();
			})
			.catch(error => {
				console.log('error',error);
				this.loading = false;
				alert('El article seleccionado ya existe, por favor seleccione otro');
			});
	}

}
