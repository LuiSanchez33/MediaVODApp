import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import swal from 'sweetalert2';

declare var $: any;

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {

  movie: any;
  videoSel: any;
  videoYoutube: string = "";

  constructor(private router: ActivatedRoute, private _ms: MoviesService) {
    this.router.params.subscribe(data => {
      console.log(data["id"]);
      this._ms.getMovie(data["id"])
        .subscribe(movie => {

          this.movie = movie;
        });

    });
  }

  viewVideo(video: any) {

    this._ms.getTrailer(video.id)
      .subscribe(data => {
        this.videoSel = data.find(movie => movie.type === 'Trailer')


        if (this.videoSel) {
          $('#myModal').modal();
          this._ms.addVideo(this.videoSel);
        } else {
          swal('Not Video', 'This movie doesnt have trailer', 'error');
          this.videoSel = null;
        }

      });
  }

  closeModal() {
    this.videoSel = null;
    $('#myModal').modal('hide');
  }


}
