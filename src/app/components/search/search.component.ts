import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searched: string = "";

  constructor(public _ms: MoviesService, private route: ActivatedRoute) {
    this.searched = "";
    this.route.params.subscribe(data => {

      if (data['id']) {
        this.searched = data['id'];
        this.SearchMovie();
      } else {
        this._ms.movies = [];
      }
    });
  }

  SearchMovie() {
    //console.log(this.searched);
    if (this.searched.length == 0) {
      return;
    }

    this._ms.SearchMovie(this.searched)
      .subscribe(data => {
        this._ms.movies = data;
      });
  }
}
