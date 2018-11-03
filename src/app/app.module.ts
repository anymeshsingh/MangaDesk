import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MangalistComponent } from './components/mangalist/mangalist.component';

import { MangaService } from './services/manga.service';
import { SearchMangaComponent } from './components/search-manga/search-manga.component';
import { FavouriteMangaComponent } from './components/favourite-manga/favourite-manga.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MangalistComponent,
    SearchMangaComponent,
    FavouriteMangaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    MangaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
