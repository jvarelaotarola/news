import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserListComponent } from './user-list/user-list.component';
import { UsersService } from './users.service';
import { UsersRoutingModule } from './users-routing.module';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule
  ],
  providers: [UsersService],
  declarations: [UserComponent, UserAddComponent, UserListComponent]
})
export class UsersModule { }
