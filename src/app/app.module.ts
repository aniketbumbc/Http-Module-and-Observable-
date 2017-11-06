import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {UserService} from './shared/service/user.service';
import { UsersComponent } from './users/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
  
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
