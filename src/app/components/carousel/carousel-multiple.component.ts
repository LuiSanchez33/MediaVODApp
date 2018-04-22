import { Component, OnInit, Input, HostListener } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import swal from 'sweetalert2';

declare var $: any;

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37
}

@Component({
  selector: 'app-carousel-multiple',
  templateUrl: './carousel-multiple.component.html',
  styleUrls: ['./carousel-multiple.component.css']
})
export class CarouselMultipleComponent implements OnInit {

  movies: any;

  movieSel: any;

  constructor(private _ms: MoviesService) {

    this._ms.getPopulars()
      .subscribe(data => this.movies = data);

  }

  ngOnInit() {
  }

  viewVideo(video: any) {

    this._ms.getTrailer(video.id)
      .subscribe((data: any) => {
        this.movieSel = data.find(movie => movie.type === 'Trailer');

        if (this.movieSel) {
          $('#myModal').modal();
          this._ms.addVideo(this.movieSel);
        } else {
          swal('Not Video', 'This movie doesnt have trailer', 'error');
          this.movieSel = null;
        }
      });

  }

  closeModal() {
    this.movieSel = null;
    $('#myModal').modal('hide');
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    //console.log(event);

    if (event.keyCode === KEY_CODE.RIGHT_ARROW) {

      $('#myCarousel').carousel('next');
      console.log($('#carouselInner'));

    }

    if (event.keyCode === KEY_CODE.LEFT_ARROW) {

      $('#myCarousel').carousel('prev');
    }
  }
}
