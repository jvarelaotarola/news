import { Injectable } from '@angular/core';
import { Reader } from './reader';
import { User } from './user';
import { DataService } from '../data.service';

@Injectable()
export class UsersService {

  private readersList: any;

  constructor(private dataService:DataService) { }

	public getUsers(){
		return this.dataService.get('/api/products');
	}

	public addUser(user:User){
		return this.dataService.post('/api/products',{'product':user});
	}

	public deleteUser(user:User){
		return this.dataService.delete('/api/products/'+user._id);
	}

	public editUser(user:User){
		return this.dataService.put('/api/products/'+user._id,{'product':user});
	}

}