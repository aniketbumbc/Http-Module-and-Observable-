import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { User} from './shared/module/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  users: User[];


  constructor (private http: Http) {}
ngOnInit() {
//  HTTP call for grab users and subscribe them observable 
this.http.get('https://reqres.in/api/users' )
.subscribe(data => {
  console.log(data.json());
  this.users = data.json().data;
});

}


}
