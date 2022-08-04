import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../users.model';
import { Opportunities } from '../opportunities.model';
import { UsersService } from '../users.service';
import { OpportunitiesService } from '../opportunities.service';

@Component({
  selector: 'app-user-read-item',
  templateUrl: './user-read-item.component.html',
  styleUrls: ['./user-read-item.component.scss'],
})
export class UserReadItemComponent implements OnInit {
  users: Users = {
    id: 0,
    name: '',
    email: '',
    isActive: false,
    phone: '',
    revenue: 0,
    agreedTerms: false,
  };

  opportunities: Opportunities[] = [];
  constructor(
    private userService: UsersService,
    private opportunitiesServbice: OpportunitiesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.readById(id).subscribe((users) => {
      this.users = users;
      // console.log(this.users);
    });

    this.opportunitiesServbice.read().subscribe((opportunities) => {
      this.opportunities = opportunities;
      console.log(this.opportunities);
    });
  }
}
