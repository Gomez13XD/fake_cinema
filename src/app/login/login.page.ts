import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {User} from '../login/user.class';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: User = new User();

  constructor(private router: Router, private authSrv: AuthService) { }

  ngOnInit() {
  }

  async login(){
    const user = await this.authSrv.login(this.user);
    if (user){
      console.log('Logeado');
      this.router.navigateByUrl('/home');
    }
  }

}
