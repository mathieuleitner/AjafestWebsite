import { Component, OnInit } from "@angular/core";
import { PagesService } from "../../services/pages.service";
import { ActivatedRoute } from "@angular/router";
import { Pages } from "../../models/pages.model";

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
    });
  }
}
