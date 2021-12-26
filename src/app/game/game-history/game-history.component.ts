import { Component, OnInit, Input } from '@angular/core';
import { IGameHistory } from "../Game"

@Component({
  selector: 'game-history',
  templateUrl: './game-history.component.html',
  styleUrls: ['./game-history.component.less']
})
export class GameHistoryComponent implements OnInit {

  constructor() { }

  @Input() histories: IGameHistory[] = []

  ngOnInit(): void {
  }

}
