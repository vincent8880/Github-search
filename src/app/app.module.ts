import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';


import { AppComponent } from './app.component';
import { GithubUsersComponent } from './github-users/github-users.component';
import { GitReposComponent } from './git-repos/git-repos.component';
import { SearchComponent } from './search/search.component';
//Routing module
import { RoutingModule } from './routing/routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { LastNamePipe } from './lastname-pipe/last-name.pipe';



@NgModule({
  declarations: [
    AppComponent,
    GithubUsersComponent,
    GitReposComponent,
    SearchComponent,
    NotFoundComponent,
    LastNamePipe,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    FormsModule,
    NgProgressModule,
    NgProgressHttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
