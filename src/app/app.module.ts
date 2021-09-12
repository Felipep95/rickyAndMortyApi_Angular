import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { CharacterService } from './services/character-service.service';

@NgModule({
  declarations: [
    AppComponent,
    CharacterCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    CharacterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
