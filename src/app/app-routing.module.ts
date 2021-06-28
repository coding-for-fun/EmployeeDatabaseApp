import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component'

const routes: Routes = [
  { path: 'employee', component: UserListComponent },
  { path: 'employee/:id', component: UserDetailComponent },
  { path: '', redirectTo: '/userList', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
