import { Component, OnInit, Input } from "@angular/core";
import { stringify } from "querystring";

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
})
export class BannerComponent implements OnInit {
  @Input() title: ["title"];
  @Input() subtitle: ["subtitle"];
  @Input() image: ["image"];
  constructor() {}

  ngOnInit(): void {}
}
