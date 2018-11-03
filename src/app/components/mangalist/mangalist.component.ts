import { Component, OnInit } from '@angular/core';
import { MangaService } from '../../services/manga.service';

@Component({
  selector: 'app-mangalist',
  templateUrl: './mangalist.component.html',
  styleUrls: ['./mangalist.component.scss']
})
export class MangalistComponent implements OnInit {

  mangaList: any;
  mangaDetails: any;
  currentMangaDetails = false;

  constructor(private manga: MangaService) { }

  ngOnInit() {
    this.fetchMangaList();
  }
  fetchMangaList(){
    this.manga.getAllManga().subscribe(mangaList=>{
      console.log(mangaList);
      this.mangaList = mangaList;
    });
  }

  getImageUrl(url){
    this.manga.getThumbnailUrl(url);
  }

  showMangaDetails(id){
    this.manga.getMangaDetails(id).subscribe(mangaDetails =>{
      console.log(mangaDetails);
      this.mangaDetails = mangaDetails;
      this.currentMangaDetails = true;
    })
  }

  searchManga(name){
    this.mangaList = null;
    console.log(name);
  }
}
