import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../services/movies.service';
import {AuthService} from '../services/auth.service';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  movie = [];

  constructor(private movieService: MoviesService, private router: Router, private afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.movie = this.movieService.getmovies();
  }

  logout() {
    this.afAuth.signOut();
    this.router.navigateByUrl('/login');
  }

}
