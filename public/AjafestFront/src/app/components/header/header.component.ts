import { Component, OnInit, ElementRef, OnDestroy } from "@angular/core";
import { map, pairwise, throttleTime } from "rxjs/operators";
import { fromEvent, Subject } from "rxjs";
import { HeaderService } from "../../services/header.service";
import { Header } from "../../models/header.model";
import {
  trigger,
  style,
  animate,
  transition,
  state,
} from "@angular/animations";

export enum VisibilityState {
  Visible = "visible",
  Hidden = "hidden",
}
export enum Direction {
  None = "None",
  Up = "Up",
  Down = "Down",
}

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  animations: [
    trigger("scrollAnimation", [
      state(VisibilityState.Visible, style({ transform: "translateY(0px)" })),
      state(VisibilityState.Hidden, style({ transform: "translateY(-80px)" })),
      transition(
        `${VisibilityState.Visible} => ${VisibilityState.Hidden}`,
        animate("250ms")
      ),
      transition(
        `${VisibilityState.Hidden} => ${VisibilityState.Visible}`,
        animate("250ms")
      ),
    ]),
  ],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public header: Header;
  public logo1: string;
  public logo2: string;
  public logos: any;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  toggleMenu: boolean;

  dom: HTMLElement = this.elementRef.nativeElement;

  isHeader1Visible = VisibilityState.Visible;
  isHeader2Visible = VisibilityState.Hidden;
  slideHeader2InAtPosition = 30;

  constructor(
    private headerService: HeaderService,
    private elementRef: ElementRef
  ) {
    this.toggleMenu = false;
  }

  ngOnInit(): void {
    this.headerService.getLogos().subscribe((logos) => {
      if (logos) {
        this.logo1 = logos[0].logos[0].url;
        this.logo2 = logos[0].logos[1].url;
      } else {
        this.logos = [];
      }
    });
  }

  ngAfterViewInit() {
    const content = document.querySelector("window");
    const scroll$ = fromEvent(window, "scroll").pipe(
      throttleTime(10),
      map(() => window.pageYOffset),
      pairwise(),
      map(
        ([y1, y2]): Direction =>
          y2 < y1
            ? Direction.Up
            : y2 > this.slideHeader2InAtPosition
            ? Direction.Down
            : Direction.None
      )
    );
    scroll$.subscribe((e) => {
      if (window.pageYOffset > 260) {
        this.isHeader1Visible = VisibilityState.Hidden;
        this.isHeader2Visible = VisibilityState.Visible;
      } else {
        this.isHeader1Visible = VisibilityState.Visible;
        this.isHeader2Visible = VisibilityState.Hidden;
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  displayMenu(): void {
    this.toggleMenu = !this.toggleMenu;
    if (this.toggleMenu === true) {
      document.body.classList.add("fixed");
      this.isHeader1Visible = VisibilityState.Visible;
      this.isHeader2Visible = VisibilityState.Hidden;
      document.body.ontouchmove = (e) => {
        e.preventDefault();
        return false;
      };
    } else {
      document.body.classList.remove("fixed");
      if (window.pageYOffset > 260) {
        this.isHeader1Visible = VisibilityState.Hidden;
        this.isHeader2Visible = VisibilityState.Visible;
      } else {
        this.isHeader1Visible = VisibilityState.Visible;
        this.isHeader2Visible = VisibilityState.Hidden;
      }
    }
  }

  updateMenu() {
    this.displayMenu();
  }

  closeMenu() {
    this.toggleMenu = false;
    document.body.classList.remove("fixed");
  }
}
