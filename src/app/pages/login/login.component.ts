import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: UserModel;
  response: string;
  error: any;

  constructor(private userService: UsersService) {
    this.model = { username: '', password: '' };
  }

  ngOnInit() {
  }

  login() {
    this.userService.login(this.model).subscribe(res => {
        this.response = res.Message,
        error => {
          return this.response = error;
        } // error path
    });
  }


}
