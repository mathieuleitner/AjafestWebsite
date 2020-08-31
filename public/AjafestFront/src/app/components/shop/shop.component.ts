import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-shop",
  templateUrl: "./shop.component.html",
})
export class ShopComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    var exampleCallback = function () {};

    window.EBWidgets.createWidget({
      // Required
      widgetType: "checkout",
      eventId: "118643942225",
      iframeContainerId: "eventbrite-widget-container-118643942225",

      // Optional
      iframeContainerHeight: 425, // Widget height in pixels. Defaults to a minimum of 425px if not provided
      onOrderComplete: exampleCallback, // Method called when an order has successfully completed
    });
  }
}
