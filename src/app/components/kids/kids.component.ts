import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent implements OnInit {

  popularsKids: any;

  constructor(private _ms: MoviesService) {
    this._ms.getPopularsKids()
      .subscribe(data => this.popularsKids = data);
  }

  ngOnInit() {
  }

}
