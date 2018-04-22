import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(movie: any, poster: boolean = false): any {

    let image: string = '';
    let url = 'https://image.tmdb.org/t/p/w300'
    let noimage = 'assets/img/noimage.png'

    if (poster) {
      return url + movie.poster_path;
    }

    if (movie === undefined) {
      return noimage;
    } else
      if (movie.backdrop_path) {
        image = url + movie.backdrop_path;
        return image;
      } else if (movie.poster_path) {
        image = url + movie.poster_path;
        return image;
      } else {
        return noimage;
      }
  }


}
