import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'game-history-item',
  templateUrl: './game-history-item.component.html',
  styleUrls: ['./game-history-item.component.less']
})
export class GameHistoryItemComponent {

  constructor() { }

  @Input() index: number = 0
  @Input() pos: number|null = null
  @Input() isActive: boolean = false
  @Output() onClick = new EventEmitter<number>()

  handleClick(step: number) {
    this.onClick.emit(step)
  }

  posText() {
    if (!this.pos && this.pos !== 0) {
      return ""
    }
    return `[${parseInt((this.pos / 3 + 1).toString())}, ${this.pos % 3 + 1}]`
  }

  btnText() {
    return this.index === 0 ? "Go to start!" : "Go to move #" + this.index
  }
}
