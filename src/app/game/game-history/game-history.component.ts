import { Component } from '@angular/core';
import { IGameHistory } from "../game"
import { GameService } from "../game.service"

@Component({
  selector: 'game-history',
  templateUrl: './game-history.component.html',
  styleUrls: ['./game-history.component.less']
})
export class GameHistoryComponent {

  constructor(
    private gameService: GameService
  ) { }

  history: IGameHistory[] = []

  ngDoCheck() {
    this.history = this.gameService.getHistory()
  }

  handleClick(step: number) {
    this.gameService.moveHistory(step)
  }

}
