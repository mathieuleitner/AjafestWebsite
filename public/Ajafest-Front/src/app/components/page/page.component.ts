import { Component, OnInit } from "@angular/core";
import { PagesService } from "src/app/services/pages.service";
import { ActivatedRoute } from "@angular/router";
import { Pages } from "src/app/models/pages.model";

@Component({
  selector: "app-page",
  templateUrl: "./page.component.html",
})
export class PageComponent implements OnInit {
  page: Pages;

  constructor(
    private activeRoute: ActivatedRoute,
    private pagesService: PagesService
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((routeParams) => {
      this.loadPage(routeParams.slug);
    });
  }

  loadPage(slug) {
    this.pagesService.getPageBySlug(slug).subscribe((page) => {
      this.page = page[0];
      console.log(this.page[0]);
    });
  }
}
