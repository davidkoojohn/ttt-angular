import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'game-square',
  templateUrl: './game-square.component.html',
  styleUrls: ['./game-square.component.less']
})
export class GameSquareComponent {

  constructor() { }

  @Input() value: string = ""
  @Input() index?: number
  @Input() line?: number[]
  @Output() onClick = new EventEmitter<number>()

  isRed() {
    return (this.index || this.index === 0) && this.line && this.line.includes(this.index)
  }

  handleClick() {
    this.onClick.emit(this.index)
  }
}
