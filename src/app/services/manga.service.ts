import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MangaService {

  mangaListUrl = "https://www.mangaeden.com/api/list/0";
  mangaDetailUrl = "https://www.mangaeden.com/api/manga/";
  mangaImageUrl = "https://cdn.mangaeden.com/mangasimg/";
  mangaChapterPagesUrl = "https://www.mangaeden.com/api/chapter/";
  mangaList: any = null;
  currentMangaDetails: any = null;

  constructor(private http: HttpClient) { }

  getAllManga(){
    // return this.http.get(this.mangaListUrl)
    //   .pipe(
    //     map(res => res)
    //     );
    return this.http.get(this.mangaListUrl)
      .pipe(
        map((res) => {
          this.mangaList = res;
          return res
        })
      );
  }

  getThumbnailUrl(url){
    var fullUrl = (this.mangaImageUrl+url);
    return fullUrl;
  }

  getMangaDetails(id){
    return this.http.get(this.mangaDetailUrl+id)
      .pipe(
        map((res) => {
          this.currentMangaDetails = res;
          return res;
        })
      );
  }

  fetchChapterPages(chapterId){
    // console.log(chapterId)
    // console.log(this.mangaChapterPagesUrl+chapterId)
    return this.http.get(this.mangaChapterPagesUrl+chapterId)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }
}
