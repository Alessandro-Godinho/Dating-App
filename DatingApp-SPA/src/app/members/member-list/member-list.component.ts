import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/User';
import { UserService } from '../../_services/User.service';
import { AlertifyService } from '../../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
users: User[];
  constructor(private userServce: UserService, private router: ActivatedRoute, private alertify: AlertifyService) { }

  ngOnInit() {
    this.router.data.subscribe(data => {
      this.users = data['users'];
    });
  }
  // loadUsers() {
  //   this.userServce.getUsers().subscribe((user: User[]) => {
  //     this.users = user;
  //   }, error => {
  //     this.alertify.error(error);
  //   }
  //   );
  // }

}
