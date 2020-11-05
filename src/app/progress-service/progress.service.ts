import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { State } from '../map/state.model';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  STATES: State[] = [
    {
      name: 'Alabama',
      electoralVotes: 9
    },
    {
      name: 'Alaska',
      electoralVotes: 3
    },
    {
      name: 'Arizona',
      electoralVotes: 11
    },
    {
      name: 'Arkansas',
      electoralVotes: 6
    },
    {
      name: 'California',
      electoralVotes: 55
    },
    {
      name: 'Colorado',
      electoralVotes: 9
    },
    {
      name: 'Connecticut',
      electoralVotes: 7
    },
    {
      name: 'Delaware',
      electoralVotes: 3
    },
    {
      name: 'District of Columbia',
      electoralVotes: 3
    },
    {
      name: 'Florida',
      electoralVotes: 29
    },
    {
      name: 'Georgia',
      electoralVotes: 16
    },
    {
      name: 'Hawaii',
      electoralVotes: 4
    },
    {
      name: 'Idaho',
      electoralVotes: 4
    },
    {
      name: 'Illinois',
      electoralVotes: 20
    },
    {
      name: 'Indiana',
      electoralVotes: 11
    },
    {
      name: 'Iowa',
      electoralVotes: 6
    },
    {
      name: 'Kansas',
      electoralVotes: 6
    },
    {
      name: 'Kentucky',
      electoralVotes: 8
    },
    {
      name: 'Louisiana',
      electoralVotes: 8
    },
    {
      name: 'Maine',
      electoralVotes: 2
    },
    {
      name: 'Maryland',
      electoralVotes: 10
    },
    {
      name: 'Massachusetts',
      electoralVotes: 11
    },
    {
      name: 'Michigan',
      electoralVotes: 16
    },
    {
      name: 'Minnesota',
      electoralVotes: 10
    },
    {
      name: 'Mississippi',
      electoralVotes: 6
    },
    {
      name: 'Missouri',
      electoralVotes: 10
    },
    {
      name: 'Montana',
      electoralVotes: 3
    },
    {
      name: 'Nebraska',
      electoralVotes: 2
    },
    {
      name: 'Nevada',
      electoralVotes: 6
    },
    {
      name: 'New Hampshire',
      electoralVotes: 4
    },
    {
      name: 'New Jersey',
      electoralVotes: 14
    },
    {
      name: 'New Mexico',
      electoralVotes: 5
    },
    {
      name: 'New York',
      electoralVotes: 29
    },
    {
      name: 'North Carolina',
      electoralVotes: 15
    },
    {
      name: 'North Dakota',
      electoralVotes: 3
    },
    {
      name: 'Ohio',
      electoralVotes: 18
    },
    {
      name: 'Oklahoma',
      electoralVotes: 7
    },
    {
      name: 'Oregon',
      electoralVotes: 7
    },
    {
      name: 'Pennsylvania',
      electoralVotes: 20
    },
    {
      name: 'RhodeIsland',
      electoralVotes: 4
    },
    {
      name: 'South Carolina',
      electoralVotes: 9
    },
    {
      name: 'South Dakota',
      electoralVotes: 3
    },
    {
      name: 'Tennessee',
      electoralVotes: 11
    },
    {
      name: 'Texas',
      electoralVotes: 38
    },
    {
      name: 'Utah',
      electoralVotes: 6
    },
    {
      name: 'Vermont',
      electoralVotes: 3
    },
    {
      name: 'Virginia',
      electoralVotes: 13
    },
    {
      name: 'Washington',
      electoralVotes: 12
    },
    {
      name: 'West Virginia',
      electoralVotes: 5
    },
    {
      name: 'Wisconsin',
      electoralVotes: 10
    },
    {
      name: 'Wyoming',
      electoralVotes: 3
    },
    {
      name: 'ME-01',
      electoralVotes: 1
    },
    {
      name: 'ME-02',
      electoralVotes: 1
    },
    {
      name: 'NE-01',
      electoralVotes: 1
    },
    {
      name: 'NE-02',
      electoralVotes: 1
    },
    {
      name: 'NE-03',
      electoralVotes: 1
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
      for (let i = 0; i < this.STATES.length; i++) {
        if (modes[i] === 1 || modes[i] === 2) {
          demVotesFromStorage += this.STATES[i].electoralVotes;
        } else if (modes[i] === -2 || modes[i] === -1) {
          gopVotesFromStorage += this.STATES[i].electoralVotes;
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
