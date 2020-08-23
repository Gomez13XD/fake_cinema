import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private authSrv: AuthService, private router: Router, private alertControl: AlertController) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authSrv.isLogged){
      return true;
    }
    this.alertControl.create({
      header: 'Unauthorized',
      message: 'You are not allow to access that page',
      buttons: ['OK']
    }).then(alert => alert.present());
    this.router.navigateByUrl('/login');
    console.log('No logeado');
    return false;
  }
  
}
