import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ProgressService } from '../progress-service/progress.service';

@Injectable({
  providedIn: 'root'
})
export class ResetService {

  public resetConfirmWindow = false;

  wasReset = new Subject<null>();

  constructor(private progressService: ProgressService) { }

  reset(): void {
    this.progressService.demsElectoralVotes.subscribe(
      demVotes => {
        this.progressService.removeDemsElectoralVotes(demVotes);
      }
    );

    this.progressService.gopElectoralVotes.subscribe(
      gopVotes => {
        this.progressService.removeGopElectoralVotes(gopVotes);
      }
    );

    localStorage.clear();
    this.progressService.syncWithStorage();
    this.wasReset.next(null);
  }
}
