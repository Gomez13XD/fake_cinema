import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MoviesService} from '../../services/movies.service';
import {MoviesModel} from '../movies.model';
import {IonInput} from '@ionic/angular';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  movie: MoviesModel;

  constructor(private activatedRouter: ActivatedRoute, private moviesService: MoviesService, private router: Router) { }

  ngOnInit() {
    this.activatedRouter.paramMap.subscribe(paramMap => {
      const movieRecipeId = paramMap.get('movieID');
      this.movie = this.moviesService.getmovie(movieRecipeId);
    });
  }

  editMovie(newTitle: IonInput, newDesc: IonInput, newImg: IonInput){
    this.activatedRouter.paramMap.subscribe(paramMap => {
      const movieRecipeId = paramMap.get('movieID');
      this.moviesService.editmovie(movieRecipeId, (<string> newTitle.value), (<string> newDesc.value), (<string> newImg.value));
      this.router.navigateByUrl('/movies');
    });
  }

}
