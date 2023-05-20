import { Component, OnInit, computed, signal } from '@angular/core';
import { TvShowRestService } from '../../tv-show.rest.service';
import { TvShow } from '../../models/tv-show.model';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss']
})
export class TvShowsComponent implements OnInit{

  //Imposto i miei signal (uno per le serie e uno per quelle preferite)
  //Invece di impostare il valore su TvShow ho preferito aver un signal in più per provare meglio l'esercizio
  public tvShows = signal<TvShow[]>([]);
  public favoriteTvShows = signal<number[]>([]);
  //Questa computed viene triggerata ogni volta che cambia il valore di "favoriteTvShows", la uso per sapere quante serie tv Preferite ci sono 
  public numberOfFavorite = computed(() => this.favoriteTvShows().length)

  constructor(private tvShowRestService: TvShowRestService) {}

  ngOnInit(): void {
    //Prendo le serie tv da un'api presa online
    this.tvShowRestService.getTvShows().subscribe(tvShows => {
      this.tvShows.set(tvShows);
    });
  }

  //Uso il set dei signal per aggiornare il loro valore, se l'id della serie è tra i preferiti lo rimuovo, altrimenti lo aggiungo
  addRemoveFavorite(id: number): void {
    const idPrefet = this.favoriteTvShows().findIndex((idP: number) => idP === id);
    if(idPrefet === -1){
      this.favoriteTvShows.set([...this.favoriteTvShows(), id]);
    }else{
      this.favoriteTvShows.set(this.favoriteTvShows().filter(idP => idP !== id));
    }
  }

}
