import {
  Component,
  OnInit,
  ElementRef,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";
import {
  trigger,
  stagger,
  style,
  animate,
  transition,
  query,
  group,
} from "@angular/animations";
import { Header } from "../../models/header.model";
import { HeaderService } from "../../services/header.service";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  animations: [
    trigger("openClose", [
      transition(":enter", [
        style({ transform: "translateX(100vw)" }),
        group([
          animate("600ms cubic-bezier(.30,.85,.30,.85)"),
          query(".menu__nav__item", [
            style({
              opacity: 0,
              transform: "translateX(300px)",
            }),
            stagger(100, [
              animate(
                "600ms 200ms cubic-bezier(.30,.85,.30,.85)",
                style({ opacity: 1, transform: "none" })
              ),
            ]),
          ]),
        ]),
      ]),
      transition(":leave", [
        animate(
          "600ms cubic-bezier(.85,.30,.85,.30)",
          style({ transform: "translateX(100%)" })
        ),
      ]),
    ]),
  ],
})
export class MenuComponent implements OnInit {
  el: number;
  dom: HTMLElement = this.elementRef.nativeElement;
  header: any;

  @Input("toggleMenu") toggleMenu: boolean;
  @Output() public removeMenu: EventEmitter<boolean> = new EventEmitter<
    boolean
  >();

  constructor(
    private elementRef: ElementRef,
    private headerService: HeaderService
  ) {}

  ngOnInit(): void {
    this.getBackgrounds();
  }

  closeMenu() {
    this.removeMenu.emit();
  }

  displayBackground(el) {
    const backgrounds = this.dom.querySelectorAll(".menu__background--second");
    backgrounds[el].classList.add("menu__background--visible");
  }

  removeBackground(el) {
    const backgrounds = this.dom.querySelectorAll(".menu__background--second");
    backgrounds[el].classList.remove("menu__background--visible");
  }

  getBackgrounds() {
    this.headerService.getHeader().subscribe((header: Header) => {
      if (header) {
        this.header = header;
      } else {
        this.header = {};
      }
    });
  }
}
