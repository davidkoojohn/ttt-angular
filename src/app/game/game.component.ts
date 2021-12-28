import { Component } from '@angular/core';
import { GameService } from "./game.service"

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.less']
})
export class GameComponent {
  constructor(
    public gameService: GameService
  ) {}
}
