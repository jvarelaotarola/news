import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { NewsComponent } from './news/news.component';
import { NewsAddComponent } from './news-add/news-add.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsService } from './news.service';
import { NewsRoutingModule } from './news-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NewsRoutingModule
  ],
  providers: [NewsService],
  declarations: [NewsComponent, NewsAddComponent, NewsListComponent]
})
export class NewsModule { }
