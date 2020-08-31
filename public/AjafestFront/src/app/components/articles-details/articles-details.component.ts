import { Component, OnInit } from "@angular/core";
import { ArticlesService } from "../../services/articles.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-articles-details",
  templateUrl: "./articles-details.component.html",
})
export class ArticlesDetailsComponent implements OnInit {
  article_id: string;
  article: any;
  constructor(
    private activeRoute: ActivatedRoute,
    private articlesService: ArticlesService
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((routeParams) => {
      this.loadArticleDetails(routeParams.slug);
    });
  }

  loadArticleDetails(slug) {
    this.articlesService.getArticleBySlug(slug).subscribe((article) => {
      this.article = article;
    });
  }
}
