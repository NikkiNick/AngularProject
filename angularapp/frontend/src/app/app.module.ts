import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MainComponent } from './main/main.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NieuwsOverzichtComponent } from './nieuws/nieuws-overzicht/nieuws-overzicht.component';
import { NieuwsBerichtComponent } from './nieuws/nieuws-bericht/nieuws-bericht.component';
import { AddNieuwsBerichtComponent } from './nieuws/add-nieuws-bericht/add-nieuws-bericht.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'nieuws', component: NieuwsOverzichtComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}, 
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MainComponent,
    UserComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    NieuwsOverzichtComponent,
    NieuwsBerichtComponent,
    AddNieuwsBerichtComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
