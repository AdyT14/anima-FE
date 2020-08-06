import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import { AnimeCardComponent } from './anime-card/anime-card.component';
import { AnimeEpisodeComponent } from './anime-episode/anime-episode.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AnimeCardComponent,
    AnimeEpisodeComponent
  ],
  imports: [],
  providers: []
})
export class DashboardModule {
}
