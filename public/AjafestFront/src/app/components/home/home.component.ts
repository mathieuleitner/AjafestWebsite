import { Component, OnInit } from "@angular/core";
import { Articles } from "../../models/articles.model";
import { ArticlesService } from "../../services/articles.service";
import { Artists } from "../../models/artists.model";
import { ArtistsService } from "../../services/artists.service";
import { HomePageService } from "../../services/homepage.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
  public articles: Articles[];
  public artists: Artists[];
  public homePage: HomePage;

  constructor(
    private articlesService: ArticlesService,
    private artistsService: ArtistsService,
    private homePageService: HomePageService
  ) {}

  ngOnInit(): void {
    this.getArticles();
    this.getArtists();
    this.getHomePage();
  }

  getArtists() {
    this.artistsService.getArtists().subscribe((artists) => {
      if (artists) {
        this.artists = artists;
        this.artists.slice(0, 1);
      } else {
        this.artists = [];
      }
    });
  }

  getArticles() {
    this.articlesService.getArticles().subscribe((articles) => {
      if (articles) {
        this.articles = articles;
      } else {
        this.articles = [];
      }
    });
  }

  getHomePage() {
    this.homePageService.getHomePage().subscribe((homePage: HomePage) => {
      if (homePage) {
        this.homePage = homePage;
      } else {
        this.homePage = {};
      }
    });
  }
}
