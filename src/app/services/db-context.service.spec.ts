import { TestBed, inject } from '@angular/core/testing';
import { DbContextService } from './db-context.service';
import { HttpClientModule, HttpClient, HttpResponse  } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
let service;
let httpTestingController: HttpTestingController;
describe('DbContextService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DbContextService]
    });
    httpTestingController = TestBed.get(HttpTestingController);
  });

  beforeEach(inject([DbContextService], s => {
    service = s;
  }));

  beforeEach(() => {
    this.mockUsers = [{
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    }];
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created', inject([DbContextService], (service: DbContextService) => {
    expect(service).toBeTruthy();
  }));

  it('should be created new', () => {
    expect(service).toBeTruthy();
  });

  it('should get data from API', () => {
    service.getUsers().subscribe(
      x => expect(x.length).toEqual(this.mockUsers.length),
      fail
    );
    // Receive GET request
    const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/users');
    expect(req.request.method).toEqual('GET');
    // Respond with the mock heroes
    req.flush(this.mockUsers);
  });
});
