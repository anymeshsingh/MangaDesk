import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MangalistComponent } from './components/mangalist/mangalist.component';
import { MangaReaderComponent } from './components/manga-reader/manga-reader.component';

const routes: Routes = [
  {
    path: "",
    component: MangalistComponent
  },
  {
    path: "mangareader",
    component: MangaReaderComponent
  },
  {
    path: "**",
    component: MangalistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
