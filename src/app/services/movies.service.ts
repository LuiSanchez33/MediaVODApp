import { Injectable } from '@angular/core';
import { Jsonp, Http } from '@angular/http';
import 'rxjs/Rx' //Map

@Injectable()
export class MoviesService {

  videos: any[] = [];
  movies: any[] = [];
  private apikey: string = "5deb8fbc33a22cdd19f341a464bd7d4d";
  private urlMoviedb: string = "https://api.themoviedb.org/3";

  constructor(private jsonp: Jsonp, private http: Http) { }

  getPopulars() {
    let url = `${this.urlMoviedb}/discover/movie?api_key=${this.apikey}&sort_by=popularity.desc`;
    /*return this.http.get(url).map(res => res.json()); */

    return this.http.get(url)
      .map(resp => resp.json().results);
  }

  getPopularsKids() {
    let url = `${this.urlMoviedb}/discover/movie?api_key=${this.apikey}&certification_country=US&certification.lte=G&sort_by=popularity.desc`;

    return this.http.get(url)
      .map(data => data.json().results);
  }

  getMovie(movieId: string) {
    //let url = `${this.urlMoviedb}/search/company?api_key=${this.apikey}&query=${movie}&page=1`;
    let url = `${this.urlMoviedb}/movie/${movieId}?api_key=${this.apikey}&language=en-US`;

    return this.http.get(url)
      .map(resp => resp.json());
  }



  getTrailer(movieId: string) {
    let url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=5deb8fbc33a22cdd19f341a464bd7d4d&language=en-US`
    return this.http.get(url)
      .map(resp => resp.json().results);
  }

  SearchMovie(movie: string) {

    let url = `${this.urlMoviedb}/search/movie?query=${movie}&sort_by=popularity.desc&api_key=${this.apikey}&language=en-US`;
    //let url = `${this.urlMoviedb}/movie/${movieId}?api_key=${this.apikey}&language=en-US`;

    return this.http.get(url)
      .map(resp => {
        return resp.json().results;
      });
  }

  addVideo(newVideo: any) {

    if (this.videos) {
      this.videos = this.videos.filter(video => video.id !== newVideo.id);
    }

    this.videos.unshift(newVideo);

    //save in local storage
    localStorage.setItem('history', JSON.stringify(this.videos));
  }
}
