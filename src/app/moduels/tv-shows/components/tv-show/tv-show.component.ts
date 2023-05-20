import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { TvShow } from '../../models/tv-show.model';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TvShowComponent{

  @Input() tvShow?: TvShow;
  @Input() isFavorite: boolean = false;
  @Output() addRemoveToFavorite = new EventEmitter<number>();
}
