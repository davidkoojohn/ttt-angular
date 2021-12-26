import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameHistoryItemComponent } from './game-history-item.component';

describe('GameHistoryItemComponent', () => {
  let component: GameHistoryItemComponent;
  let fixture: ComponentFixture<GameHistoryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameHistoryItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameHistoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
