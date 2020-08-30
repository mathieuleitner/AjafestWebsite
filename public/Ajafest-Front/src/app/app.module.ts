import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgpSortModule } from "ngp-sort-pipe";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";

import { ArticlesService } from "./services/articles.service";
import { ContactFormService } from "./services/contactForm.service";

import { AppComponent } from "./app.component";
import { ArticlesComponent } from "./components/articles/articles.component";
import { ArticlesDetailsComponent } from "./components/articles-details/articles-details.component";
import { HomeComponent } from "./components/home/home.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ModalComponent } from "./components/modal/modal.component";
import { MenuComponent } from "./components/menu/menu.component";
import { BannerComponent } from "./components/banner/banner.component";
import { MarkdownModule } from "ngx-markdown";
import { BenevolesComponent } from "./components/benevoles/benevoles.component";
import { PageComponent } from "./components/page/page.component";
import { ArtistsComponent } from "./components/artists/artists.component";
import { ContactComponent } from "./components/contact/contact.component";
import { ShopComponent } from "./components/shop/shop.component";

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ArticlesDetailsComponent,
    ModalComponent,
    MenuComponent,
    BannerComponent,
    BenevolesComponent,
    PageComponent,
    ArtistsComponent,
    ContactComponent,
    ShopComponent,
  ],
  imports: [
    NgpSortModule,
    MarkdownModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [ArticlesService, ContactFormService],
  bootstrap: [AppComponent],
})
export class AppModule {}
