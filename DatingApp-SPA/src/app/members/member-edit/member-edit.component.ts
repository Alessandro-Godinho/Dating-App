import { AuthService } from './../../_services/auth.service';
import { AlertifyService } from './../../_services/alertify.service';
import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../_models/User';
import { NgForm } from '@angular/forms';
import { UserService } from '../../_services/User.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
@ViewChild('editForm') editForm: NgForm;
user: User;
@HostListener('window:beforeunload', ['$event'])
unloadNotification($event: any) {
  if (this.editForm.dirty) {
    $event.returnValue = true;
  }
}

  constructor(private userService: UserService, private authService: AuthService,
     private route: ActivatedRoute, private alertify: AlertifyService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data['user'];
    });
  }

  updateUser() {
    this.userService.updateUser(this.authService.decodedToken.nameid,  this.user).subscribe(next => {
      this.editForm.reset(this.user);
    }, error => {
      this.alertify.error(error);
    })
    this.alertify.success('alterou com sucesso');
    this.editForm.reset(this.user);
  }
}
