import { Component, OnInit } from '@angular/core';
import { ResetService } from '../reset-service/reset.service';

@Component({
  selector: 'app-reset-window',
  templateUrl: './reset-window.component.html',
  styleUrls: ['./reset-window.component.scss']
})
export class ResetWindowComponent implements OnInit {

  constructor(public resetService: ResetService) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.resetService.resetConfirmWindow = false;
  }

  reset(): void {
    this.resetService.reset();
    this.resetService.resetConfirmWindow = false;
  }
}
