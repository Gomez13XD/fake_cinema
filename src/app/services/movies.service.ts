import { Injectable } from '@angular/core';
import {MoviesModel} from '../movies/movies.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private movie: MoviesModel[] = [
    {
      movieID: '1',
      title: 'The Godfather',
      rate: 5,
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sagittis nisl rhoncus mattis rhoncus urna. tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium.',
      imgURL: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg'
    },
    {
      movieID: '2',
      title: 'The Dark Knight',
      rate: 4,
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sagittis nisl rhoncus mattis rhoncus urna. tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium.',
      imgURL: `https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg`
    }
  ];

  constructor() { }

  getmovies(){
    return [...this.movie];
  }

  getmovie(movieId: string){
    return {
      ...this.movie.find(movie => {
        return movie.movieID === movieId;
      })
    };
  }

  editmovie(movieId: string, movieTitle: string, movieDesc: string, movieImg: string){
    this.movie.map(dato => {
      if (dato.movieID === movieId){
        dato.title = movieTitle;
        dato.description = movieDesc;
        dato.imgURL = movieImg;
      }
      return dato;
    });
  }

  ratemovie(movieId: string, movieRate: number){
    this.movie.map(dato => {
      if (dato.movieID === movieId){
        dato.rate = movieRate;
      }
      return dato;
    });
  }

}
