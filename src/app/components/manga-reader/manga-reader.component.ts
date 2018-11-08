import { Component, OnInit } from '@angular/core';
import { MangaService } from '../../services/manga.service';

@Component({
  selector: 'app-manga-reader',
  templateUrl: './manga-reader.component.html',
  styleUrls: ['./manga-reader.component.scss']
})
export class MangaReaderComponent implements OnInit {

  chapterlistArray = [];
  chapterPages: any;
  currentChapterPagesArray = [];
  currentPageUrl:String = "";
  chapterNumber = 0;
  pageNumber = 0;

  constructor(private manga: MangaService) { }

  ngOnInit() {
    this.chapterlistArray = this.manga.currentMangaDetails.chapters;
    this.chapterNumber = this.chapterlistArray[this.chapterlistArray.length-1][0];
    this.showChapterPages(this.chapterlistArray[this.chapterlistArray.length-1][3], this.chapterNumber);
    
  }

  showChapterPages(chapterId, chapterNumber){
    this.chapterNumber = chapterNumber;
    this.pageNumber = 0;
    this.manga.fetchChapterPages(chapterId).subscribe(chapterPages => {
      this.chapterPages = chapterPages;
      let count = 0;
      for(let i=(this.chapterPages.images.length-1); i>=0; i--){
        this.currentChapterPagesArray[count] = this.chapterPages.images[i];
        count++;
      }
      this.currentPageUrl = this.getImageUrl(this.currentChapterPagesArray[this.pageNumber][1]);
    })
  }

  getImageUrl(url){
    return this.manga.getThumbnailUrl(url);
  }
  gotoPrevoiusPage(){
    if(this.currentChapterPagesArray[this.pageNumber]){
      this.pageNumber--;
    this.currentPageUrl = this.getImageUrl(this.currentChapterPagesArray[this.pageNumber][1]);
    }
  }
  gotoNextPage(){
    if(this.currentChapterPagesArray[this.pageNumber]){
      this.pageNumber++;
      this.currentPageUrl = this.getImageUrl(this.currentChapterPagesArray[this.pageNumber][1]);
    }
  }

}
