import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.less']
})
export class GameComponent implements OnInit {

  constructor() {}

  private xIsNextPlayer: boolean = true
  squares: string[] = new Array(9).fill(null)
  title: string = "Next player is: X"

  ngOnInit(): void {
  }

  handleClick(index: number) {
    this.squares[index] = this.xIsNextPlayer ? "X" : "O"
    this.xIsNextPlayer = !this.xIsNextPlayer
    if (this.xIsNextPlayer) {
      this.title = "Next player is: X"
    } else {
      this.title = "Next player is: O"
    }
  }
}
