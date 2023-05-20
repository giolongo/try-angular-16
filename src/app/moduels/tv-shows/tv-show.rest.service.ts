import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TvShow } from './models/tv-show.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvShowRestService {

  constructor(private http:HttpClient) { }

  public getTvShows(): Observable<TvShow[]> {
    return this.http.get<{tv_shows: TvShow[]}>('https://www.episodate.com/api/most-popular?page=1https://www.episodate.com/api/most-popular?page=1')
    .pipe(map(resp => resp.tv_shows));
  }
}
