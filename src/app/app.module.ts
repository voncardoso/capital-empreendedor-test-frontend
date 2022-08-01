import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidbarComponent } from './components/sidbar/sidbar.component';
import { HomeComponent } from './views/home/home.component';
import { UsersReadComponent } from './components/users/users-read/users-read.component';

@NgModule({
  declarations: [AppComponent, SidbarComponent, HomeComponent, UsersReadComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
