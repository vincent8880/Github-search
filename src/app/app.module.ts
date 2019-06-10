import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitReposComponent } from './git-repos/git-repos.component';
import { GithubUsersComponent } from './github-users/github-users.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchComponent } from './search/search.component';
import { RoutingModule } from './routing/routing.module';
import { FontChangerDirective } from './font-changer.directive';
import { LastNamePipe } from './last-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GitReposComponent,
    GithubUsersComponent,
    NotFoundComponent,
    SearchComponent,
    FontChangerDirective,
    LastNamePipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
