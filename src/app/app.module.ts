import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { GameComponent } from './game/game.component';
import { GameBoardComponent } from './game/game-board/game-board.component';
import { GameSquareComponent } from './game/game-square/game-square.component';
import { GameHistoryComponent } from './game/game-history/game-history.component';
import { GameHistoryItemComponent } from './game/game-history-item/game-history-item.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    GameBoardComponent,
    GameSquareComponent,
    GameHistoryComponent,
    GameHistoryItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
