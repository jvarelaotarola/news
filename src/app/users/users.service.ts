import { Injectable } from '@angular/core';
import { Reader } from './reader';

@Injectable()
export class UsersService {

  private readersList: any;

  

  constructor() {
    this.readersList = [
      new Reader(1, 'Jesus Varela', 'jxv@akc.org'),
      new Reader(2, 'Violet Evergarden', 'vevergarden@autodoll.com'),
      new Reader(3, 'Gazef Stronoff', 'gazef.stronoff@kingdom.com')
    ]
   }

   public getReaders():any {
     return this.readersList;
   }

}