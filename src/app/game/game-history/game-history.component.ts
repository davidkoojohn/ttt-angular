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
  stepNumber: number = 0

  ngDoCheck() {
    this.history = this.gameService.getHistory()
    this.stepNumber = this.gameService.stepNumber
  }

  handleClick(step: number) {
    this.gameService.moveHistory(step)
  }

}
