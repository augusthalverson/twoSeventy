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
  states: State[] = [
    {
      name: 'alabama',
      mode: 0,
      electoralVotes: 9
    },
    {
      name: 'alaska',
      mode: 0,
      electoralVotes: 3
    },
    {
      name: 'arizona',
      mode: 0,
      electoralVotes: 11
    },
    {
      name: 'arkansas',
      mode: 0,
      electoralVotes: 6
    },
    {
      name: 'california',
      mode: 0,
      electoralVotes: 55
    },
    {
      name: 'colorado',
      mode: 0,
      electoralVotes: 9
    },
    {
      name: 'connecticut',
      mode: 0,
      electoralVotes: 7
    },
    {
      name: 'delaware',
      mode: 0,
      electoralVotes: 3
    },
    {
      name: 'District of Columbia',
      mode: 0,
      electoralVotes: 3
    },
    {
      name: 'florida',
      mode: 0,
      electoralVotes: 29
    },
    {
      name: 'georgia',
      mode: 0,
      electoralVotes: 16
    },
    {
      name: 'hawaii',
      mode: 0,
      electoralVotes: 4
    },
    {
      name: 'idaho',
      mode: 0,
      electoralVotes: 4
    },
    {
      name: 'illinois',
      mode: 0,
      electoralVotes: 20
    },
    {
      name: 'indiana',
      mode: 0,
      electoralVotes: 11
    },
    {
      name: 'iowa',
      mode: 0,
      electoralVotes: 6
    },
    {
      name: 'kansas',
      mode: 0,
      electoralVotes: 6
    },
    {
      name: 'kentucky',
      mode: 0,
      electoralVotes: 8
    },
    {
      name: 'louisiana',
      mode: 0,
      electoralVotes: 8
    },
    {
      name: 'maine',
      mode: 0,
      electoralVotes: 4
    },
    {
      name: 'maryland',
      mode: 0,
      electoralVotes: 10
    },
    {
      name: 'massachusetts',
      mode: 0,
      electoralVotes: 11
    },
    {
      name: 'michigan',
      mode: 0,
      electoralVotes: 16
    },
    {
      name: 'minnesota',
      mode: 0,
      electoralVotes: 10
    },
    {
      name: 'mississippi',
      mode: 0,
      electoralVotes: 6
    },
    {
      name: 'missouri',
      mode: 0,
      electoralVotes: 10
    },
    {
      name: 'montana',
      mode: 0,
      electoralVotes: 3
    },
    {
      name: 'nebraska',
      mode: 0,
      electoralVotes: 5
    },
    {
      name: 'nevada',
      mode: 0,
      electoralVotes: 6
    },
    {
      name: 'newHampshire',
      mode: 0,
      electoralVotes: 4
    },
    {
      name: 'newJersey',
      mode: 0,
      electoralVotes: 14
    },
    {
      name: 'newMexico',
      mode: 0,
      electoralVotes: 5
    },
    {
      name: 'newYork',
      mode: 0,
      electoralVotes: 29
    },
    {
      name: 'northCarolina',
      mode: 0,
      electoralVotes: 15
    },
    {
      name: 'northDakota',
      mode: 0,
      electoralVotes: 3
    },
    {
      name: 'ohio',
      mode: 0,
      electoralVotes: 18
    },
    {
      name: 'oklahoma',
      mode: 0,
      electoralVotes: 7
    },
    {
      name: 'oregon',
      mode: 0,
      electoralVotes: 7
    },
    {
      name: 'pennsylvania',
      mode: 0,
      electoralVotes: 20
    },
    {
      name: 'rhodeIsland',
      mode: 0,
      electoralVotes: 4
    },
    {
      name: 'southCarolina',
      mode: 0,
      electoralVotes: 9
    },
    {
      name: 'southDakota',
      mode: 0,
      electoralVotes: 3
    },
    {
      name: 'tennessee',
      mode: 0,
      electoralVotes: 11
    },
    {
      name: 'texas',
      mode: 0,
      electoralVotes: 38
    },
    {
      name: 'utah',
      mode: 0,
      electoralVotes: 6
    },
    {
      name: 'vermont',
      mode: 0,
      electoralVotes: 3
    },
    {
      name: 'virginia',
      mode: 0,
      electoralVotes: 13
    },
    {
      name: 'washington',
      mode: 0,
      electoralVotes: 12
    },
    {
      name: 'westVirginia',
      mode: 0,
      electoralVotes: 5
    },
    {
      name: 'wisconsin',
      mode: 0,
      electoralVotes: 10
    },
    {
      name: 'wyoming',
      mode: 0,
      electoralVotes: 3
    }
  ];

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
    0
  ];

  constructor(public progressService: ProgressService) { }

  ngOnInit(): void {
    if(!!localStorage.getItem('modes')) {
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
