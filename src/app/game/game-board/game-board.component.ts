import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.less']
})
export class GameBoardComponent implements OnInit {

  constructor() { }

  @Input() squares: string[] = []
  @Input() line: number[] = []
  @Output() onClick = new EventEmitter<number>()

  ngOnInit(): void {
  }

  handleClick(index: number) {
    this.onClick.emit(index)
  }

}
