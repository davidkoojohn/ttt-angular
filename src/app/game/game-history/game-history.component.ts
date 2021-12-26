import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IGameHistory } from "../Game"

@Component({
  selector: 'game-history',
  templateUrl: './game-history.component.html',
  styleUrls: ['./game-history.component.less']
})
export class GameHistoryComponent implements OnInit {

  constructor() { }

  @Input() histories: IGameHistory[] = []

  @Output() onClick = new EventEmitter<number>()

  ngOnInit(): void {
  }

  handleClick(step: number) {
    this.onClick.emit(step)
  }

}
