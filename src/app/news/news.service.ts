import { Injectable } from '@angular/core';
import { Sports } from './sports';
import { International } from './international';

@Injectable()
export class NewsService {

  private sportsNewsList = [
    new Sports('Esto fue lo que dejó la fase regular del Clausura 2018', 'Herediano, Saprissa y Alajuelense fueron los equipos con más triunfos en la primera fase con 13', 'sports'),
    new Sports('Lindora Run 2018 busca emular la Maratón de Berlín', 'Para este 2018, la competencia tendrá un cupo máximo de 2.800 corredores que tomarán la línea de partida el domingo 11 de noviembre.', 'sports'),
    new Sports('Costa Rica viaja al Mundial de Surf con altas expectativas', 'Del 20 al 28 de mayo, Costa Rica contará con una selección de lujo en busca de repetir el primer lugar alcanzado en las olas de Popoyo, Nicaragua en el 2015.', 'sports')
  ];
  private internationalNewsList = [
    new International('Demócratas presentan demanda contra Rusia y equipo de campaña de Trump', 'Esta demanda civil, presentada por el Comité Nacional Demócrata (DNC) en un tribunal federal en Manhattan, acusa a Rusia de haber informado al equipo de campaña de Trump de que había efectuado un ataque informático contra el DNC.', 'international'),
    new International('Manifestaciones en Nicaragua', ' Miles de ciudadanos se manifiestan en distintos puntos, desde la capital Managua y León.', 'Internacinal'),
    new International('Líder norcoreano anuncia el cierre de instalaciones de pruebas nucleares', 'El líder de Corea del Norte, Kim Jong Un, anunció la suspensión de los ensayos nucleares y de misiles de su país.', 'Internacional')
  ];
  private newsList = [this.sportsNewsList, this.internationalNewsList];

  constructor() {
    console.log('service sports list: ', this.sportsNewsList);
    console.log('service this news list: ', this.newsList);
  }

  public getNews() {
    return this.newsList;
  }

  public pushSportsNews(sport: Sports): void {
    this.sportsNewsList.push(sport);
  }

}
