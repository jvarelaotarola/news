import { Injectable } from '@angular/core';
import { Reader } from './reader';
import { User } from './user';
import { DataService } from '../data.service';

@Injectable()
export class UsersService {

  private readersList: any;

  constructor(private dataService:DataService) { }

	public getUsers(){
		return this.dataService.get('/api/users');
	}

	public addUser(user:User){
		console.log('addUser: ', user);
		return this.dataService.post('/api/users',{'user':user});
	}

	public deleteUser(user:User){
		return this.dataService.delete('/api/users/'+user._id);
	}

	public editUser(user:User){
		console.log('editUser: ', user);
		return this.dataService.put('/api/users/'+user._id,{'user':user});
	}

}