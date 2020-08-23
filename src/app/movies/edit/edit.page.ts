import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MoviesService} from '../../services/movies.service';
import {MoviesModel} from '../movies.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  movie: MoviesModel;

  constructor(private activatedRouter: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit() {
    this.activatedRouter.paramMap.subscribe(paramMap => {
      const movieRecipeId = paramMap.get('movieID');
      this.movie = this.moviesService.getmovie(movieRecipeId);
    })
  }

}
