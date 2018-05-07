import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

	@Output() addUser = new EventEmitter<any>();
	@Output() editUser = new EventEmitter<any>();
	@Input() canAdd : boolean = true;
	@Input('selectedUser') user : User = new User();
	submitted = false;
	requiredText : string = 'user';
	isEditing = false;

	onSubmit(userForm) {
		if(this.isEditing){
			this.editUser.emit({
				'user':this.user,
				'form':userForm
			});
			this.isEditing = false;
		} else {
			this.addUser.emit({
				'user':this.user,
				'form':userForm
			});
		}
		this.submitted = true; 
	}

	constructor() { }

	ngOnInit() {
	}

	ngOnChanges(changes){
		if(changes.email && changes.user.currentValue.email){
			this.isEditing = true;
		}
	}

	newUser(user){
		this.submitted = false; 
		this.isEditing = false;
    
	}

}
