import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {User} from '../login/user.class';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: User = new User();
  loginImg = 'https://via.placeholder.com/500';

  constructor(private router: Router, private authSrv: AuthService, public alertController: AlertController) { }

  ngOnInit() {
  }

  async login(){
    const user = await this.authSrv.login(this.user);
    if (user){
      this.router.navigateByUrl('/movies');
    }
  }

  async changeImg(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'New login image!',
      message: 'Insert a new image url',
      inputs: [
        {
          name: 'name3',
          value: this.loginImg,
          type: 'url',
          placeholder: 'https://myimg.com'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Okay',
          handler: (alertData) => {
            this.loginImg = alertData.name3;
          }
        }
      ]
    });
    await alert.present();
  }

}
