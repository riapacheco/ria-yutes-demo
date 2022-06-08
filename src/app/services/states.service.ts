import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class StatesService {
  public sidebarState$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  constructor() { }

  updateSidebarState(newState: boolean) { this.sidebarState$.next(newState); }
  closeSidebar() { this.sidebarState$.next(false); }
}