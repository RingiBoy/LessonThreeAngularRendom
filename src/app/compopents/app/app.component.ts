import {Component} from '@angular/core';

import {GetAllUsersService} from '../../services/get-all-users.service';
import {User} from '../../models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users: User[];

  constructor(private getAllUsersService: GetAllUsersService) {

    this.getAllUsersService.getUsers().subscribe(value => {
      console.log('USERS');
      console.log(value);
      this.users = value;
    });


  }

}
