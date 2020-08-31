import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ArticlesComponent } from "./components/articles/articles.component";
import { ArticlesDetailsComponent } from "./components/articles-details/articles-details.component";
import { BenevolesComponent } from "./components/benevoles/benevoles.component";
import { PageComponent } from "./components/page/page.component";
import { ArtistsComponent } from "./components/artists/artists.component";
import { ContactComponent } from "./components/contact/contact.component";
import { ShopComponent } from "./components/shop/shop.component";
import { ErrorComponent } from "./components/error/error.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "artists", component: ArtistsComponent },
  { path: "home", component: HomeComponent },
  { path: "news", component: ArticlesComponent },
  { path: "news/:slug", component: ArticlesDetailsComponent },
  { path: "benevoles", component: BenevolesComponent },
  { path: "contact", component: ContactComponent },
  { path: "page/:slug", component: PageComponent },
  { path: "shop", component: ShopComponent },
  { path: "**", component: ErrorComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "top",
      onSameUrlNavigation: "reload",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
