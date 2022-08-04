import { Component, OnInit } from '@angular/core';
import { Users } from '../users.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-read',
  templateUrl: './users-read.component.html',
  styleUrls: ['./users-read.component.scss'],
})
export class UsersReadComponent implements OnInit {
  users: Users[] = [];

  constructor(private userService: UsersService) {
    let teste: [];
  }

  ngOnInit(): void {
    this.userService.read().subscribe((users) => {
      this.users = users;
      console.log(this.users);
    });
  }
}
