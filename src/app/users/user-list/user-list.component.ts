import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  private title: string;
  private readersList: any;

  constructor(private usersService: UsersService) {
    this.title = 'Readers List';
   }

  ngOnInit() {
    this.readersList = this.usersService.getReaders();
    console.log('readers list: ', this.readersList);
  }

}
