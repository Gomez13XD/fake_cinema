import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {User} from '../login/user.class';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user: User = new User();

  constructor(private router: Router, private authSrv: AuthService) { }

  ngOnInit() {
  }

  async register(){
    const user = await this.authSrv.register(this.user);
    if (user){
      console.log('Creado');
      this.router.navigate(['/login']);
    }
  }

}
