import { Component, OnInit } from "@angular/core";
import { BenevolePageService } from "../../services/benevolepage.service";

@Component({
  selector: "app-benevoles",
  templateUrl: "./benevoles.component.html",
})
export class BenevolesComponent implements OnInit {
  public benevolePage: BenevolePage;

  constructor(private benevolePageService: BenevolePageService) {}

  ngOnInit(): void {
    this.getBenevolePage();
  }

  getBenevolePage() {
    this.benevolePageService
      .getBenevolePage()
      .subscribe((benevolePage: BenevolePage) => {
        if (benevolePage) {
          this.benevolePage = benevolePage;
        } else {
          this.benevolePage = {};
        }
      });
  }
}
