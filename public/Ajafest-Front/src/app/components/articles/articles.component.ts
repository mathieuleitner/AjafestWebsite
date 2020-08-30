import { Component, OnInit } from "@angular/core";
import { Articles } from "../../models/articles.model";
import { ArticlesService } from "../../services/articles.service";
import { ArticlePageService } from "../../services/articlepage.service";

@Component({
  selector: "app-articles",
  templateUrl: "./articles.component.html",
})
export class ArticlesComponent implements OnInit {
  public articlePage: ArticlePage;
  public articles: Articles[];

  constructor(
    private articleService: ArticlesService,
    private articlePageService: ArticlePageService
  ) {}

  ngOnInit(): void {
    this.getArticles();
    this.getArticlePage();
  }

  getArticles() {
    this.articleService.getArticles().subscribe((articles) => {
      if (articles) {
        this.articles = articles;
      } else {
        this.articles = [];
      }
    });
  }

  getArticlePage() {
    this.articlePageService
      .getArticlePage()
      .subscribe((articlePage: ArticlePage) => {
        if (articlePage) {
          console.log(articlePage);
          this.articlePage = articlePage;
        } else {
          this.articlePage = {};
        }
      });
  }
}
