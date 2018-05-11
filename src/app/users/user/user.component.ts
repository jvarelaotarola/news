import { Component, OnInit, AfterViewInit } from '@angular/core';
import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, AfterViewInit {
  public users : User[];
	public selectedUser : User = new User;
	public loading : boolean = false;
	constructor(private userService: UsersService) { }

	ngOnInit() {
		this.getUsers();
	}

	public editUser(user){
		console.log('edit',user);
		this.selectedUser = Object.assign({}, user);
	}

	public editUserSave(user){
		this.userService.editUser(user.user)
			.then(data => {
				this.getUsers();
			})
			.catch(error => {
				console.log('error',error);
			});
	}

	public deleteUser(user){
		console.log('delete', user);
		this.userService.deleteUser(user)
			.then(data => {
				this.getUsers();
			})
			.catch(error => {
				console.log('error',error);
			});
	}

	public getUsers(){
		this.userService.getUsers().subscribe((data) => {
				this.users = data.user;
			},(error)=>{
				console.log('error',error);
			});
	}

	public addUser(user:any){
		this.loading = true;
		this.userService.addUser(user.user)
			.then(data => {
				console.log('user added.');
				user.form.reset();
				this.loading = false;
				this.getUsers();
			})
			.catch(error => {
				console.log('error',error);
			});
	}

	ngAfterViewInit(){
		console.timeEnd();
	}

}
