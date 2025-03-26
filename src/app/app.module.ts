import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GANTT_GLOBAL_CONFIG, NgxGanttModule } from '@worktile/gantt';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGanttModule
  ],
  providers: [
    {
      provide: GANTT_GLOBAL_CONFIG,
      useValue: {
        locale: 'en-us',
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
