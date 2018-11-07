import { Component, OnInit } from '@angular/core';
import { MangaService } from '../../services/manga.service';

@Component({
  selector: 'app-mangalist',
  templateUrl: './mangalist.component.html',
  styleUrls: ['./mangalist.component.scss']
})
export class MangalistComponent implements OnInit {

  mangaList: any;
  allMangaListArray = [];
  mangaDetails: any;
  currentMangaDetails = false;
  imageUrl: String;

  constructor(private manga: MangaService) { }

  ngOnInit() {
    this.fetchMangaList();
  }
  fetchMangaList(){
    if(!this.manga.mangaList){
      this.manga.getAllManga().subscribe(mangaList=>{
        this.mangaList = mangaList;
      });
    }else{
      this.mangaList = this.manga.mangaList;
    } 
  }

  getImageUrl(url){
     return this.manga.getThumbnailUrl(url);
  }

  showMangaDetails(id){
    this.manga.getMangaDetails(id).subscribe(mangaDetails =>{
      this.mangaDetails = mangaDetails;
      this.currentMangaDetails = true;
    })
  }

  searchManga(name){
    if(!this.allMangaListArray[0]){
      for(let i = 0; i < this.mangaList.manga.length;i++){
        this.allMangaListArray[i] = this.mangaList.manga[i];
      }
    }
    let filteredMangaArray = [];
    let mangaListArray = this.allMangaListArray;
    let count = 0;
    for(let i = 0; i<mangaListArray.length; i++){
      if(mangaListArray[i].t.toLowerCase().includes(name.toLowerCase())){
        filteredMangaArray[count] = mangaListArray[i];
        count++;
      }
    }
    this.mangaList.manga = [];
    for(let i = 0; i<filteredMangaArray.length; i++){
      this.mangaList.manga[i] = filteredMangaArray[i];
    }
  }
}
