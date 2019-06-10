import { Component, OnInit, ViewChild } from '@angular/core';
import { GhHttpService } from 'src/app/services/gh-http.service';
import { Observable, of } from 'rxjs';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  tap,
  switchMap
} from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { Repository } from 'src/app/models/repository';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  providers: [GhHttpService, SearchService],
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  @ViewChild('userForm')
  form: any;
  model: string;
  user: User;
  repos: Repository[];
  searching = false;
  searchFailed = false;
  constructor(
    private service: GhHttpService,
    private _service: SearchService
  ) {}

  ngOnInit() {}

  getUser({ value }) {
    this.service.username = value.search;
    this.service
      .userRequest()
      .then(() => (this.user = this.service.user))
      .catch(err => console.log(err));
    this.service
      .repoRequest()
      .then(() => (this.repos = this.service.repos))
      .catch(err => console.log(err));
    this.form.reset();
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => (this.searching = true)),
      switchMap(term =>
        this._service.search(term).pipe(
          tap(() => (this.searchFailed = false)),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          })
        )
      ),
      tap(() => (this.searching = false))
    );
}
