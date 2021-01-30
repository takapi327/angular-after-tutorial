import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }     from './app.component';

import { UserListComponent }     from './user-list.component';
import { UserListItemComponent } from './user-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
