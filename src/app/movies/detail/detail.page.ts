import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MoviesService} from '../../services/movies.service';
import {MoviesModel} from '../movies.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  movie: MoviesModel;

  constructor(private activatedRoute: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const movieRecipeId = paramMap.get('movieID');
      this.movie = this.moviesService.getmovie(movieRecipeId);
    })
  }

}
