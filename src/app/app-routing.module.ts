import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { NewsComponent } from './news/news/news.component';
import { UserComponent } from './users/user/user.component';

const ROUTES: Routes = [
  {
    path: 'users',
    loadChildren: 'app/users/users.module#UsersModule'
  },
  {
    path: 'news',
    loadChildren: 'app/news/news.module#NewsModule'
  },
  {
    path: '**', 
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
        ROUTES,
        { 
            preloadingStrategy: PreloadAllModules, 
            useHash: true
        }
    )
  ],
  exports: [
      RouterModule
  ],
  providers: []
})
export class AppRoutingModule { }
