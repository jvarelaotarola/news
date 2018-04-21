import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  submitted = false;
  isUpdating = false;
  userType = '';
  title: string;
  requiredText : string = 'producto';
  user: any = {};

  onSubmit() {
		if(this.isUpdating){
			console.log('editing');

		} else {

			console.log('add');
		}
		this.submitted = true; 
	}

	constructor() {
    this.user.name = '';
    this.user.email = '';
    this.title = 'Add a new User';
   }

	ngOnInit() {
	}

	ngOnChanges(changes){
		console.log('changes',changes);
		if(changes.email && changes.user.currentValue.email){
			this.isUpdating = true;
		}
	}

	newUser(user){
		this.submitted = false; 
		this.isUpdating = false;
    
	}

}
