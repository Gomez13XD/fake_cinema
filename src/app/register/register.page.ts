import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {User} from '../login/user.class';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user: User = new User();

  constructor(private router: Router, private authSrv: AuthService, private alertControl: AlertController) { }

  ngOnInit() {
  }

  async register(){
    if (this.user.password.length < 6){
      this.alertControl.create({
        header: 'Weak password',
        message: 'Password should be at least 6 characters',
        buttons: ['OK']
      }).then(alert => alert.present());
    }
    const user = await this.authSrv.register(this.user);
    if (user){
      this.router.navigate(['/login']);
    }
  }

}
