import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteMangaComponent } from './favourite-manga.component';

describe('FavouriteMangaComponent', () => {
  let component: FavouriteMangaComponent;
  let fixture: ComponentFixture<FavouriteMangaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouriteMangaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteMangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
