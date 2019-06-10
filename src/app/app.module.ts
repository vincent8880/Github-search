import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { FormsModule } from '@angular/forms';

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
    FormsModule,
    RoutingModule,
    NgProgressModule,
    NgProgressHttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
