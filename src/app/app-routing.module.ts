import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserReadItemComponent } from './components/users/user-read-item/user-read-item.component';
import { UsersReadComponent } from './components/users/users-read/users-read.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: UsersReadComponent,
  },
  {
    path: 'users/:id',
    component: UserReadItemComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
