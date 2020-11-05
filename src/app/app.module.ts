import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { ProgressComponent } from './progress/progress.component';
import { TitlebarComponent } from './titlebar/titlebar.component';
import { RestartComponent } from './restart/restart.component';
import { ResetConfirmComponent } from './reset-confirm/reset-confirm.component';
import { ResetWindowComponent } from './reset-window/reset-window.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ProgressComponent,
    TitlebarComponent,
    RestartComponent,
    ResetConfirmComponent,
    ResetWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
