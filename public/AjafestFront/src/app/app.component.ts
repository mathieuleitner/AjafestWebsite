import { Component, OnInit, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title: string = "Ajafest-Front";

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    this.document.body.classList.add("overflow-x");
  }
}
