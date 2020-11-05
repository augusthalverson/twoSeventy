import { Component, OnInit } from '@angular/core';
import { ProgressService } from './progress-service/progress.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'twoSeventy';

  constructor(public progressService: ProgressService) { }

  ngOnInit() {
    this.progressService.syncWithStorage();
  }
}
