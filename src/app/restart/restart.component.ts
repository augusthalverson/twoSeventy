import { Component, OnInit } from '@angular/core';
import { ResetService } from '../reset-service/reset.service';

@Component({
  selector: 'app-restart',
  templateUrl: './restart.component.html',
  styleUrls: ['./restart.component.scss']
})
export class RestartComponent implements OnInit {

  constructor(public resetService: ResetService) { }

  ngOnInit(): void {
  }

  confirmReset(): void {
    this.resetService.resetConfirmWindow = true;
  }

}
