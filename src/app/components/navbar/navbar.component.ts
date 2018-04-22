import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private moviesService: MoviesService, private router: Router) {

  }

  ngOnInit() {
  }

  searchMovie(movie: string) {
    if (movie.length == 0) {
      return;
    }
    //console.log(movie);
    this.router.navigate(['/search', movie]);
  }
}
