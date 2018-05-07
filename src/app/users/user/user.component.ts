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
		this.obtenerProductos();
	}

	public editUser(producto){
		console.log('edit',producto);
		this.selectedUser = Object.assign({}, producto);
	}

	public editUserSave(producto){
		this.userService.editUser(producto.producto)
			.then(data => {
				this.obtenerProductos();
			})
			.catch(error => {
				console.log('error',error);
			});
	}

	public borrarProducto(producto){
		this.userService.editUser(producto)
			.then(data => {
				this.obtenerProductos();
			})
			.catch(error => {
				console.log('error',error);
			});
	}

	public obtenerProductos(){
		this.userService.getUsers().subscribe((data) => {
				this.users = data.product;
			},(error)=>{
				console.log('error',error);
			});
	}

	public agregarProducto(producto:any){
		this.loading = true;
		this.userService.addUser(producto.producto)
			.then(data => {
				console.log('user added.');
				producto.form.reset();
				this.loading = false;
				this.obtenerProductos();
			})
			.catch(error => {
				console.log('error',error);
			});
	}

	ngAfterViewInit(){
		console.timeEnd();
	}

}
