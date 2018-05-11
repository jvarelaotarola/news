import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input() user : User;
	@Output() deleteUser = new EventEmitter<User>();
	@Output() editUser = new EventEmitter<User>();
	public isDeleting = false;

	constructor(private productosService:UsersService) { }

	ngOnInit() {
		
	}

	delete(){
		console.log('User deleting');
		this.isDeleting = true;
		this.deleteUser.emit(this.user);
	}


	edit(){
		this.editUser.emit(this.user);
	}

}
