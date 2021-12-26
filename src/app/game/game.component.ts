import { Component, OnInit } from '@angular/core';
import { IGameHistory, TWinner } from "./Game"

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.less']
})
export class GameComponent implements OnInit {

  constructor() {}

  private xIsNextPlayer: boolean = true
  private scores: number[] = [8, 1, 6, 3, 5, 7, 4, 9, 2]
  title: string = ""
  line: number[] = []
  histories: IGameHistory[] = [
    {
      squares:  new Array(9).fill(null),
      pos: 0
    }
  ]
  stepNumber: number = 0
  squares: string[] = this.histories[this.stepNumber].squares

  ngOnInit(): void {
  }

  ngDoCheck() {
    const winner = this.calculateWinner()
    if(!winner) {
      if (this.squares.every(it => !!it)) {
        this.title = "No Winner!"
      } else {
        this.title = `Next player is: ${ this.xIsNextPlayer ? "X" : "O"}`
      }
    } else {
      this.title = `Winner is: ${ winner.val }`
      this.line = winner.line
    }
    this.squares = this.histories[this.stepNumber].squares
  }

  handleClick(index: number) {
    if (this.squares[index] || this.calculateWinner()) {
      return
    }
    const temp = this.squares.slice()
    temp[index] = this.xIsNextPlayer ? "X" : "O"
    this.stepNumber++
    this.xIsNextPlayer = (this.stepNumber % 2 === 0)

    this.histories.push({
      squares: temp,
      pos: index
    })
  }

  moveHistory(step: number) {
    this.stepNumber = step
    this.histories = this.histories.slice(0, step + 1)
    console.log(this.histories)
  }

  private calculateWinner(): TWinner {
    let result!: TWinner
    for (let i = 0; i < this.squares.length; i++) {
      for (let j = 0; j < this.squares.length; j++) {
        for (let k = 0; k < this.squares.length; k++) {
          if (
            this.squares[i]
            && (this.squares[i] === this.squares[j])
            && (this.squares[i] === this.squares[k])
            && (i < j &&  j < k)
            && (+this.scores[i] + +this.scores[j] + +this.scores[k] === 15)
          ) {
            result = {
              val: this.squares[i],
              line: [i, j, k]
            }
            break
          }
        }
      }
    }
    return result
  }
}
