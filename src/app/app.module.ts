import { BrowserModule }       from '@angular/platform-browser';
import { NgModule }            from '@angular/core';
import { HttpClientModule }    from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }     from './app.component';

import { UserListComponent }       from './view/user-list/user-list.component';
import { UserListItemComponent }   from './view/user-list-item/user-list-item.component';
import { UserListFilterComponent } from './view/user-list-filter/user-list-filter.component';
import { UserDetailPageComponent } from './view/user-detail-page/user-detail-page.component';

import { ExplicitSubscribeComponent } from './explicit-subscribe.component';
import { AsyncPipeComponent } from './async-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserListItemComponent,
    UserListFilterComponent,
    UserDetailPageComponent,
    ExplicitSubscribeComponent,
    AsyncPipeComponent
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
