import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeEpisodeComponent } from './anime-episode.component';

describe('AnimeEpisodeComponent', () => {
  let component: AnimeEpisodeComponent;
  let fixture: ComponentFixture<AnimeEpisodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimeEpisodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeEpisodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
