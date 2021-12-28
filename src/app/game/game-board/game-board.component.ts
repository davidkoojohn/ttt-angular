import { Component } from '@angular/core';
import { GameService } from "../game.service";

@Component({
  selector: 'game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.less']
})
export class GameBoardComponent {

  constructor(
    private gameService: GameService
  ) { }

  squares: string[] = []
  line: number[] = []

  ngDoCheck() {
    this.squares = this.gameService.getCurrentHistory()
    this.line = this.gameService.getLine()
  }

  handleClick(index: number) {
    this.gameService.addHistory(index)
  }
}
