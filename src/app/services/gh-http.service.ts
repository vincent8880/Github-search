import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from 'src/app/models/user';
import { Repository } from 'src/app/models/repository';

@Injectable({
  providedIn: 'root'
})
export class GhHttpService {
  username = 'Lugaga';
  user: User;
  repo: Repository;
  repos = [];
  constructor(private http: HttpClient) {
    this.user = new User('', '', null, null, '', '', '', null);
    this.repo = new Repository('', '', '', '');
  }

  updateUser(username) {
    this.username = username;
  }

  userRequest() {
    interface ApiResponse {
      avatar_url: string;
      bio: string;
      followers: number;
      following: number;
      html_url: string;
      login: string;
      name: string;
      public_repos: number;
    }
    const promise = new Promise((resolve, reject) => {
      this.http
        .get<ApiResponse>(
          `https://api.github.com/users/${this.username}?client_id=${
            environment.clientId
          }&client_secret=${environment.clientSecret}`
        )
        .toPromise()
        .then(response => {
          this.user.avatarUrl = response.avatar_url;
          this.user.bio = response.bio;
          this.user.followers = response.followers;
          this.user.following = response.following;
          this.user.htmlUrl = response.html_url;
          this.user.login = response.login;
          this.user.name = response.name;
          this.user.publicRepos = response.public_repos;
          resolve();
        })
        .catch(err => reject(err));
    });
    return promise;
  }

  repoRequest() {
    interface RepoResponse {
      name: string;
      description: string;
      svn_url: string;
      language: string;
    }
    const promise = new Promise((resolve, reject) => {
      this.http
        .get<RepoResponse[]>(
          `https://api.github.com/users/${this.username}/repos?client_id=${
            environment.clientId
          }&client_secret=${environment.clientSecret}`
        )
        .toPromise()
        .then(response => {
          for (const repos of response) {
            this.repo.name = repos.name;
            this.repo.description = repos.description;
            this.repo.language = repos.language;
            this.repo.svnUrl = repos.svn_url;
            this.repos.unshift(this.repo);
            this.repo = new Repository('', '', '', '');
          }
          resolve();
        })
        .catch(err => reject(err));
    });
    return promise;
  }
}
