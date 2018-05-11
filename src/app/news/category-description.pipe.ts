import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryDescription'
})
export class CategoryDescriptionPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log('pipe category: ', value);
    if(value === 'nationals') {
      return 'Nationals: local news.';
    } else if (value === 'sports') {
      return 'Sports: Not just soccer.';
    } else if (value === 'economics') {
      return 'Economics: Money news.';
    } else if (value === 'opinion') {
      return 'Opinion: What people think.';
    } else if (value === 'world') {
      return 'World: International news.';
    }
  }

}
