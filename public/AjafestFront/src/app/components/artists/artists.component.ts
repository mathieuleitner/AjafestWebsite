import { Component, OnInit } from "@angular/core";
import { Artists } from "../../models/artists.model";
import { ArtistsService } from "../../services/artists.service";
import { ArtistPageService } from "../../services/artistpage.service";

@Component({
  selector: "app-artists",
  templateUrl: "./artists.component.html",
})
export class ArtistsComponent implements OnInit {
  public artists: Artists[]; // Tableau qui sera toujours display dans le template HTML
  public sortedArtists: Artists[]; // Va servir de array tampon
  public allArtists: Artists[]; // Tableau qui permet de garder en mémoire la collection de tous les artistes

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
        this.allArtists = artists; // Enregistre un tableau avec tous les artistes.
        this.artists = artists; // Enregistre un 2ème tableau avec les artistes à display (ici tous).
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
    this.artists = []; // On vide le tableau des artistes affichés.
    this.sortedArtists = []; // On réanitialise le tableau des artistes triés.
    this.allArtists.map((artist) => {
      // On parcourt le tableau et on ajoute les artistes qui ont la propriété que l'ont recherche au tableau.
      if (artist.lineups[0].Day == day) {
        this.sortedArtists.push(artist);
      }
      // Finalement, on enregistre notre tableau dans le tableau des artistes affichés.
      this.artists = this.sortedArtists;
    });
  }

  // On rerempli le tableau des artistes affichés avec le tableau de tous les artistes que l'on avait mémorisé.
  displayAllArtists() {
    this.artists = this.allArtists;
  }
}
