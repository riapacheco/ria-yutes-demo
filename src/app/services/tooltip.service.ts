import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TooltipService {
  public $showsTooltip: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public $tooltipText: BehaviorSubject<string> = new BehaviorSubject<string>('Default tooltip text');
  public $tooltipTopY: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public $tooltipLeftX: BehaviorSubject<number> = new BehaviorSubject<number>(0);


  constructor() { }

  // takes text, top coords and left coords
  showTooltip(text: string, topY: number, leftX: number): void {
    this.$tooltipText.next(text);
    this.$tooltipTopY.next(topY - 45);
    this.$tooltipLeftX.next(leftX / 1.3);
    this.$showsTooltip.next(true);
  }
  hideTooltip(): void {
    this.$showsTooltip.next(false);
  }
}