import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidbarComponent } from './components/sidbar/sidbar.component';
import { HomeComponent } from './views/home/home.component';
import { UsersReadComponent } from './components/users/users-read/users-read.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { UserReadItemComponent } from './components/users/user-read-item/user-read-item.component';

registerLocaleData(localePt);
@NgModule({
  declarations: [
    AppComponent,
    SidbarComponent,
    HomeComponent,
    UsersReadComponent,
    UserReadItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-br',
    },
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
