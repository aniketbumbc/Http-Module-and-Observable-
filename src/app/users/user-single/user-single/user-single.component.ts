import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/service/user.service';
import { User } from '../../../shared/module/user';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {
 user= User;
  constructor(private route: ActivatedRoute, private service: UserService) { }

  ngOnInit() {
// grab id from url

let id = this.route.snapshot.params['id'];

// get user service getusers
this.service.getUser(id)
.subscribe(user => this.user = user);

  }

}
