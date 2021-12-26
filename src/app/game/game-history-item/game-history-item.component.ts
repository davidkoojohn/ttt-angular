import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'game-history-item',
  templateUrl: './game-history-item.component.html',
  styleUrls: ['./game-history-item.component.less']
})
export class GameHistoryItemComponent implements OnInit {

  constructor() { }

  @Input() index: number = 0
  @Input() pos: number = 0

  @Output() onClick = new EventEmitter<number>()

  ngOnInit(): void {
  }

  handleClick(step: number) {
    this.onClick.emit(step)
  }

  posText() {
    return this.index === 0 ? "" : `[${parseInt((this.pos / 3 + 1).toString())}, ${this.pos % 3 + 1}]`
  }

  btnText() {
    return this.index === 0 ? "Go to start!" : "Go to move #" + this.index
  }
}
