import { Component, OnInit } from "@angular/core";
import { Artists } from "../../models/artists.model";
import { ArtistsService } from "../../services/artists.service";
import { ArtistPageService } from "../../services/artistpage.service";

@Component({
  selector: "app-artists",
  templateUrl: "./artists.component.html",
})
export class ArtistsComponent implements OnInit {
  public artists: Artists[];
  public sortedArtists: Artists[];
  public allArtists: Artists[];

  public artistPage: any;

  constructor(
    private artistsService: ArtistsService,
    private artistPageService: ArtistPageService
  ) {
    this.sortedArtists = [];
  }

  ngOnInit(): void {
    this.getArtists();
    this.getArtistPage();
  }

  getArtists() {
    this.artistsService.getArtists().subscribe((artists) => {
      if (artists) {
        this.allArtists = artists;
        this.artists = artists;
      } else {
        this.allArtists = [];
        this.artists = [];
      }
    });
  }

  getArtistPage() {
    this.artistPageService.getArtistPage().subscribe((artistPage) => {
      this.artistPage = artistPage;
    });
  }

  sortArtistsByDay(day) {
    this.artists = [];
    this.sortedArtists = [];
    this.allArtists.map((artist) => {
      if (artist.lineups[0].Day == day) {
        this.sortedArtists.push(artist);
      }
      this.artists = this.sortedArtists;
    });
  }

  displayAllArtists() {
    this.artists = this.allArtists;
  }
}
