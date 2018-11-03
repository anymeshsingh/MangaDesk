import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MangalistComponent } from './components/mangalist/mangalist.component';
import { SearchMangaComponent } from './components/search-manga/search-manga.component';
import { FavouriteMangaComponent } from './components/favourite-manga/favourite-manga.component';

const routes: Routes = [
  {
    path: "",
    component: MangalistComponent
  },
  {
    path: "search",
    component: SearchMangaComponent
  },
  {
    path: "favourite",
    component: FavouriteMangaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
