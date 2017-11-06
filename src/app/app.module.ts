import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {UserService} from './shared/service/user.service';
import { UsersComponent } from './users/users/users.component';
import {routing} from './app.routing';
import { UserListComponent } from './users/user-list/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
