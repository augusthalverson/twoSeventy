import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ProgressService } from '../progress-service/progress.service';
import { State } from './state.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  states: State[];

  modes: number[] = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ];

  constructor(public progressService: ProgressService) { }

  ngOnInit(): void {
    this.states = this.progressService.STATES;

    if (!!localStorage.getItem('modes')) {
      this.modes = JSON.parse(localStorage.getItem('modes'));
    }

  }

  public toggle(id: number): void {
    const previousMode = this.modes[id];
    let mode = this.modes[id];
    mode += 2;
    mode = (mode + 1) % 5;
    mode -= 2;
    this.modes[id] = mode;

    if (this.modes[id] === -2) {
      this.progressService.addGopElectoralVotes(this.states[id].electoralVotes);
      if (previousMode === 2) {
        this.progressService.removeDemsElectoralVotes(this.states[id].electoralVotes);
      }
    } else if (this.modes[id] === 0) {
      this.progressService.removeGopElectoralVotes(this.states[id].electoralVotes);
    } else if (this.modes[id] === 1) {
      this.progressService.addDemsElectoralVotes(this.states[id].electoralVotes);
    }

    localStorage.setItem('modes', JSON.stringify(this.modes));
  }

}
