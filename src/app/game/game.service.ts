import { Injectable } from '@angular/core';
import {IGameHistory, TWinner} from "./game";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  private nextPlayer: string = "X"
  private scores: number[] = [8, 1, 6, 3, 5, 7, 4, 9, 2]
  title: string = "Next player: X"
  line: number[] = []
  history: IGameHistory[] =  [
    {
      squares: Array(9).fill(null),
      pos: null
    }
  ]
  stepNumber: number = 0
  current: string[] = this.history[this.stepNumber].squares.slice()

  getLine() {
    return this.line
  }

  getHistory() {
    return this.history
  }

  getCurrentHistory() {
    return this.current
  }

  addHistory(index: number) {
    if (this.current[index] || this.calculateWinner()) return
    this.current[index] = (this.stepNumber % 2 === 0) ? "X" : "O"
    this.history.push({
      squares: this.current.slice(),
      pos: index
    })
    this.stepNumber += 1
    this.nextPlayer = (this.stepNumber % 2 === 0) ? "X" : "O"
    // check
    this.checkWinner()
  }

  moveHistory(step: number) {
    this.history = this.history.slice(0, step + 1)
    this.current = this.history[step].squares.slice()
    this.stepNumber = step
    this.nextPlayer = (this.stepNumber % 2 === 0) ? "X" : "O"
    this.line = []
    // check
    this.checkWinner()
  }

  private checkWinner() {
    const winner = this.calculateWinner()
    if(!winner) {
      this.line = []
      if (this.current.every(it => !!it)) {
        this.title = "No Winner!"
      } else {
        this.title = `Next player: ${ this.nextPlayer }`
      }
    } else {
      this.title = `Winner is: ${ winner.val }`
      this.line = winner.line
    }
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
