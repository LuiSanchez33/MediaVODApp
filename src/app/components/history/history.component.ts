import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

declare var $: any;

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  videoSel: any;
  videos: any[] = [];

  constructor(private _ms: MoviesService) {

    this._ms.videos = JSON.parse(localStorage.getItem("history"));
    if (!this._ms.videos) {

      this._ms.videos = [];
    }

    this.videos = _ms.videos;
  }

  ngOnInit() {

  }

  viewVideo(video: any) {
    this._ms.getTrailer(video.id)
      .subscribe((data: any) => {
        this.videoSel = data.find(movie => movie.type === 'Trailer');
        $('#myModal').modal();

      });
  }

  closeModal() {
    this.videoSel = null;
    $('#myModal').modal('hide');
  }

}
