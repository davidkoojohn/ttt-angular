import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { GameComponent } from './game/game.component';
import { GameBoardComponent } from './game/game-board/game-board.component';
import { GameSquareComponent } from './game/game-square/game-square.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    GameBoardComponent,
    GameSquareComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
