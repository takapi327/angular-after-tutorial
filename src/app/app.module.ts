import { BrowserModule }       from '@angular/platform-browser';
import { NgModule }            from '@angular/core';
import { HttpClientModule }    from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }     from './app.component';

import { UserListComponent }       from './user-list.component';
import { UserListItemComponent }   from './user-list-item.component';
import { UserListFilterComponent } from './user-list-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserListItemComponent,
    UserListFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
