import { TestBed } from '@angular/core/testing';

import { PokeService } from './poke.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { pokeListMock } from '../__mocks__/pockeList.mock';

describe('PokeService', () => {
  let service: PokeService;
  let httpClient: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokeService],
    });
    httpClient = TestBed.inject(HttpTestingController);
    service = TestBed.inject(PokeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deberia hacer una peticion http', (done: DoneFn) =>{
    service.getList().subscribe((res)=>{
      console.log(res);
      expect(1).toBe(1);
      done();
    });
    const req = httpClient.expectOne('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10');
    req.flush({pokeListMock});
    httpClient.verify();
  });
});
