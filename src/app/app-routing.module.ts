import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './guard/auth-guard.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuardGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'movies',
    children: [
      {
        path: '',
        loadChildren: () => import('./movies/movies.module').then( m => m.MoviesPageModule)
      },
      {
        path: ':movieID',
        loadChildren: () => import('./movies/detail/detail.module').then( m => m.DetailPageModule)
      },
      {
        path: ':movieID/edit',
        loadChildren: () => import('./movies/edit/edit.module').then( m => m.EditPageModule)
      },
      {
        path: ':movieID/rate',
        loadChildren: () => import('./movies/rate/rate.module').then( m => m.RatePageModule)
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
