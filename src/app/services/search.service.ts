import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

const ghUrl = `https://api.github.com/search/users?client_id=${
  environment.clientId
}&client_secret=${environment.clientSecret}`;
const PARAMS = new HttpParams({
  fromObject: {
    client_id: environment.clientId,
    client_secret: environment.clientSecret
  }
});

@Injectable()
export class SearchService {
  strArr = [];
  constructor(private http: HttpClient) {}

  search(term: string) {
    if (term === '') {
      return of([]);
    }

    return this.http
      .get(ghUrl, { params: PARAMS.set('q', `${term}+in:login`) })
      .pipe(
        map(response => {
          this.strArr = [];
          for (const user of response['items']) {
            this.strArr.push(user.login);
          }
          return this.strArr;
        })
      );
  }
}
