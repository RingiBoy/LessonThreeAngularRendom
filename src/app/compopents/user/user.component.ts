import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {GetAllUsersService} from '../../services/get-all-users.service';
import {PostService} from '../../services/post.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  @Input()
  user: User;

  constructor(private postService: PostService) {
  }

  showUsersToConsole(id: number): void {
    this.postService.getPostById(id).subscribe(t => console.log(t));
    }

  ngOnInit(): void {
  }

}
