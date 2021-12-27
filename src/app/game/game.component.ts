import { Component, OnInit } from '@angular/core';
import { IGameHistory, TWinner } from "./game"

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
  current: string[] = this.histories[this.stepNumber].squares

  ngOnInit(): void {
  }

  ngDoCheck() {
    this.current = this.histories[this.stepNumber].squares
    const winner = this.calculateWinner()
    if(!winner) {
      this.line = []
      if (this.current.every(it => !!it)) {
        this.title = "No Winner!"
      } else {
        this.title = `Next player: ${ this.xIsNextPlayer ? "X" : "O"}`
      }
    } else {
      this.title = `Winner is: ${ winner.val }`
      this.line = winner.line
    }
  }

  handleClick(index: number) {
    if (this.current[index] || this.calculateWinner()) return
    const temp = this.current.slice()
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
    this.xIsNextPlayer = (this.stepNumber % 2 === 0)
  }

  private calculateWinner(): TWinner {
    let result!: TWinner
    for (let i = 0; i < this.current.length; i++) {
      for (let j = 0; j < this.current.length; j++) {
        for (let k = 0; k < this.current.length; k++) {
          if (
            this.current[i]
            && (this.current[i] === this.current[j])
            && (this.current[i] === this.current[k])
            && (i < j &&  j < k)
            && (+this.scores[i] + +this.scores[j] + +this.scores[k] === 15)
          ) {
            result = {
              val: this.current[i],
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
