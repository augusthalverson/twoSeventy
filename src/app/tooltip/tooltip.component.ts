import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { State } from '../map/state.model';
import { ProgressService } from '../progress-service/progress.service';
import { TooltipService } from '../tooltip-service/tooltip.service';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {

  mouseX: number;
  mouseY: number;

  currentTerritory: State;

  @HostListener('document:mousemove', ['$event']) onMouseMove(e): void {
    if (e.pageX >= window.innerWidth - 215) {
      this.mouseX = e.pageX - 215;
    } else {
      this.mouseX = e.pageX + 15;
    }
    
    this.mouseY = e.pageY + 20;
  }

  constructor(public progressService: ProgressService, public tooltipService: TooltipService) { }

  ngOnInit(): void {
    this.tooltipService.getCurrentTerritory.subscribe(
      id => {
        this.currentTerritory = this.progressService.STATES[id];
      }
    );
  }
}
