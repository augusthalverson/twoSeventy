import { Component, OnInit } from '@angular/core';
import { State } from '../map/state.model';
import { ProgressService } from '../progress-service/progress.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

  demVotes: number;
  gopVotes: number;

  demProgress = 0;
  gopProgress = 0;

  demWon = false;
  gopWon = false;

  constructor(private progressService: ProgressService) { }

  ngOnInit(): void {
    this.progressService.demsElectoralVotes.subscribe(
      demVotes => {
        this.demProgress = (demVotes / 538 ) * 100;
        this.demVotes = demVotes;
        if (this.demVotes >= 270) {
          this.demWon = true
        } else {
          this.demWon = false;
        }
      }
    );

    this.progressService.gopElectoralVotes.subscribe(
      gopVotes => {
        setTimeout(() => {
          this.gopProgress = (gopVotes / 538) * 100;
          this.gopVotes = gopVotes;
          console.log(this.gopVotes);
          if (this.gopVotes >= 270) {
            this.gopWon = true;
          } else {
            this.gopWon = false;
          }
        }, 5);
      }
    );
  }

}
