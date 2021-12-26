import { Component, OnInit } from '@angular/core';

type TWinner = {
  val: string
  pos: number[]
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.less']
})
export class GameComponent implements OnInit {

  constructor() {}

  private xIsNextPlayer: boolean = true
  private scores: number[] = [8, 1, 6, 3, 5, 7, 4, 9, 2]
  squares: string[] = new Array(9).fill(null)
  title: string = ""

  ngOnInit(): void {
  }

  ngDoCheck() {
    const winner = this.calculateWinner()
    if(!winner) {
      this.title = `Next player is: ${ this.xIsNextPlayer ? "X" : "O"}`
    } else {
      this.title = `Winner is: ${ winner.val }`
    }
  }

  handleClick(index: number) {
    if (this.squares[index] || this.calculateWinner()) {
      return
    }
    this.squares[index] = this.xIsNextPlayer ? "X" : "O"
    this.xIsNextPlayer = !this.xIsNextPlayer
  }

  calculateWinner(): TWinner {
    let result!: TWinner
    for (let i = 0; i < this.squares.length; i++) {
      for (let j = 0; j < this.squares.length; j++) {
        for (let k = 0; k < this.squares.length; k++) {
          if (
            this.squares[i] && this.squares[j] && this.squares[k] &&
            (i > j &&  j > k) &&
            (+this.scores[i] + +this.scores[j] + +this.scores[k] === 15)) {
            result = {
              val: this.squares[i],
              pos: [i, j, k]
            }
            break
          }
        }
      }
    }
    return result
  }
}
