import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MangaService } from './services/manga.service';

import { MangalistComponent } from './components/mangalist/mangalist.component';
import { MangaReaderComponent } from './components/manga-reader/manga-reader.component';

@NgModule({
  declarations: [
    AppComponent,
    MangalistComponent,
    MangaReaderComponent
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
