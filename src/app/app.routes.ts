import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { MovieComponent } from './components/movie/movie.component';
import { KidsComponent } from './components/kids/kids.component';
import { HistoryComponent } from './components/history/history.component';
import { CarouselMultipleComponent } from './components/carousel/carousel-multiple.component';



const app_routes: Routes = [
  { path: 'home', component: CarouselMultipleComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'kids', component: KidsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'search/:id', component: SearchComponent },
  { path: 'movie/:id', component: MovieComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash: true });