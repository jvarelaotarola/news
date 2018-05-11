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
		console.log('from submittion.');
		if(this.isEditing){
			console.log('Will edit this user: ', this.user.name);
			this.editUser.emit({
				'user':this.user,
				'form':userForm
			});
			this.isEditing = false;
		} else {
			console.log('Will add this user: ', this.user.name);
			this.addUser.emit({
				'user':this.user,
				'form':userForm
			});
		}
		this.submitted = true; 
	}

	constructor() { }

	ngOnInit() {
		this.user.type = 'reader';
	}

	ngOnChanges(changes){
		console.log('changes',changes)
		if(changes.user && changes.user.currentValue._id){
			console.log('is editing');
			this.isEditing = true;
		}
	}

	newUser(user){
		this.submitted = false; 
		this.isEditing = false;
		this.user = new User();
	}

}
