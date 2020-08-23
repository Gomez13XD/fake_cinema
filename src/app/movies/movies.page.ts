import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  movie = [];

  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    this.movie = this.movieService.getmovies();
  }

}
