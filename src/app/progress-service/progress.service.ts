import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { State } from '../map/state.model';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  states: State[] = [
    {
      name: 'alabama',
      electoralVotes: 9
    },
    {
      name: 'alaska',
      electoralVotes: 3
    },
    {
      name: 'arizona',
      electoralVotes: 11
    },
    {
      name: 'arkansas',
      electoralVotes: 6
    },
    {
      name: 'california',
      electoralVotes: 55
    },
    {
      name: 'colorado',
      electoralVotes: 9
    },
    {
      name: 'connecticut',
      electoralVotes: 7
    },
    {
      name: 'delaware',
      electoralVotes: 3
    },
    {
      name: 'District of Columbia',
      electoralVotes: 3
    },
    {
      name: 'florida',
      electoralVotes: 29
    },
    {
      name: 'georgia',
      electoralVotes: 16
    },
    {
      name: 'hawaii',
      electoralVotes: 4
    },
    {
      name: 'idaho',
      electoralVotes: 4
    },
    {
      name: 'illinois',
      electoralVotes: 20
    },
    {
      name: 'indiana',
      electoralVotes: 11
    },
    {
      name: 'iowa',
      electoralVotes: 6
    },
    {
      name: 'kansas',
      electoralVotes: 6
    },
    {
      name: 'kentucky',
      electoralVotes: 8
    },
    {
      name: 'louisiana',
      electoralVotes: 8
    },
    {
      name: 'maine',
      electoralVotes: 4
    },
    {
      name: 'maryland',
      electoralVotes: 10
    },
    {
      name: 'massachusetts',
      electoralVotes: 11
    },
    {
      name: 'michigan',
      electoralVotes: 16
    },
    {
      name: 'minnesota',
      electoralVotes: 10
    },
    {
      name: 'mississippi',
      electoralVotes: 6
    },
    {
      name: 'missouri',
      electoralVotes: 10
    },
    {
      name: 'montana',
      electoralVotes: 3
    },
    {
      name: 'nebraska',
      electoralVotes: 5
    },
    {
      name: 'nevada',
      electoralVotes: 6
    },
    {
      name: 'newHampshire',
      electoralVotes: 4
    },
    {
      name: 'newJersey',
      electoralVotes: 14
    },
    {
      name: 'newMexico',
      electoralVotes: 5
    },
    {
      name: 'newYork',
      electoralVotes: 29
    },
    {
      name: 'northCarolina',
      electoralVotes: 15
    },
    {
      name: 'northDakota',
      electoralVotes: 3
    },
    {
      name: 'ohio',
      electoralVotes: 18
    },
    {
      name: 'oklahoma',
      electoralVotes: 7
    },
    {
      name: 'oregon',
      electoralVotes: 7
    },
    {
      name: 'pennsylvania',
      electoralVotes: 20
    },
    {
      name: 'rhodeIsland',
      electoralVotes: 4
    },
    {
      name: 'southCarolina',
      electoralVotes: 9
    },
    {
      name: 'southDakota',
      electoralVotes: 3
    },
    {
      name: 'tennessee',
      electoralVotes: 11
    },
    {
      name: 'texas',
      electoralVotes: 38
    },
    {
      name: 'utah',
      electoralVotes: 6
    },
    {
      name: 'vermont',
      electoralVotes: 3
    },
    {
      name: 'virginia',
      electoralVotes: 13
    },
    {
      name: 'washington',
      electoralVotes: 12
    },
    {
      name: 'westVirginia',
      electoralVotes: 5
    },
    {
      name: 'wisconsin',
      electoralVotes: 10
    },
    {
      name: 'wyoming',
      electoralVotes: 3
    }
  ];

  private demVotes = 0;
  demsElectoralVotes = new BehaviorSubject<number>(this.demVotes);

  private gopVotes = 0;
  gopElectoralVotes = new BehaviorSubject<number>(this.gopVotes);

  constructor() { }

  syncWithStorage(): void {
    if (!!localStorage.getItem('modes')) {
      const modes = JSON.parse(localStorage.getItem('modes'));

      let demVotesFromStorage = 0;
      let gopVotesFromStorage = 0;
      for (let i = 0; i < this.states.length; i++) {
        if (modes[i] === 1 || modes[i] === 2) {
          demVotesFromStorage += this.states[i].electoralVotes;
        } else if (modes[i] === -2 || modes[i] === -1) {
          gopVotesFromStorage += this.states[i].electoralVotes;
        }
      }

      this.addDemsElectoralVotes(demVotesFromStorage);
      this.addGopElectoralVotes(gopVotesFromStorage);
    }
  }

  addDemsElectoralVotes(num: number): void {
    this.demVotes += num;
    this.demsElectoralVotes.next(this.demVotes);
  }

  removeDemsElectoralVotes(num: number): void {
    this.demVotes -= num;
    this.demsElectoralVotes.next(this.demVotes);
  }

  addGopElectoralVotes(num: number): void {
    this.gopVotes += num;
    this.gopElectoralVotes.next(this.gopVotes);
  }

  removeGopElectoralVotes(num: number): void {
    this.gopVotes -= num;
    this.gopElectoralVotes.next(this.gopVotes);
  }
}
