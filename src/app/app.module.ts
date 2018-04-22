import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { app_routing } from './app.routes';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { AboutComponent } from './components/about/about.component';
import { MoviesService } from './services/movies.service';
import { SearchComponent } from './components/search/search.component';

import { ImagePipe } from './pipes/image.pipe';
import { MovieComponent } from './components/movie/movie.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/kids/gallery.component';
import { VideoYoutubePipe } from './pipes/video-youtube.pipe';

import { KidsComponent } from './components/kids/kids.component';
import { HistoryComponent } from './components/history/history.component';
import { CarouselMultipleComponent } from './components/carousel/carousel-multiple.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,

    AboutComponent,
    SearchComponent,
    ImagePipe,
    MovieComponent,
    FooterComponent,
    GalleryComponent,
    VideoYoutubePipe,

    KidsComponent,
    HistoryComponent,

    CarouselMultipleComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    app_routing,
    JsonpModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
