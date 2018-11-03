import { TestBed } from '@angular/core/testing';

import { MangaService } from './manga.service';

describe('MangaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MangaService = TestBed.get(MangaService);
    expect(service).toBeTruthy();
  });
});
