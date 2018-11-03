import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, startWith } from 'rxjs/operators';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MangaService {

  mangaListUrl = "https://www.mangaeden.com/api/list/0";
  mangaDetailUrl = "https://www.mangaeden.com/api/manga/";
  mangaImageUrl = "https://cdn.mangaeden.com/mangasimg/";

  constructor(private http: HttpClient) { }

  getAllManga(){
    return this.http.get(this.mangaListUrl)
      .pipe(
        map(res => res)
        );
  }

  getThumbnailUrl(url){
    var fullUrl = this.mangaImageUrl+url;
    return fullUrl;
  }

  getMangaDetails(id){
    return this.http.get(this.mangaDetailUrl+id)
      .pipe(
        map(res => res)
        );
  }
}
