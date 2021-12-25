import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'game-square',
  templateUrl: './game-square.component.html',
  styleUrls: ['./game-square.component.less']
})
export class GameSquareComponent implements OnInit {

  constructor() { }

  @Input() value: string = ""
  @Input() index?: number

  @Output()
  onClick = new EventEmitter<number>()

  ngOnInit(): void {
  }

  handleClick() {
    this.onClick.emit(this.index)
  }
}
