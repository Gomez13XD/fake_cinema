import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Platform} from '@ionic/angular';
import {MoviesService} from '../../services/movies.service';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.page.html',
  styleUrls: ['./rate.page.scss'],
})
export class RatePage implements OnInit {

  rangeVal: number;

  constructor(private router: Router, public platform: Platform, private moviesService: MoviesService, private activatedRouter: ActivatedRoute) {
    this.platform.ready().then(() => {
      this.rangeVal = 5;
    });
  }

  ngOnInit() {
  }

  rate(){
    this.activatedRouter.paramMap.subscribe(paramMap => {
      const movieRecipeId = paramMap.get('movieID');
      this.moviesService.ratemovie(movieRecipeId, this.rangeVal);
      this.router.navigateByUrl('/movies');
    });
  }

}
