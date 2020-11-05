import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { State } from '../map/state.model';


@Injectable({
  providedIn: 'root'
})
export class TooltipService {

  isTooltipActivated = true;
  private currentTerritory = 0;

  getCurrentTerritory = new BehaviorSubject<number>(this.currentTerritory);

  constructor() { }

  setCurrentTerritory(id: number): void {
    this.currentTerritory = id;
    this.getCurrentTerritory.next(this.currentTerritory);
  }
}
