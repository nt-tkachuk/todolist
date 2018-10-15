import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DesktopComponent } from './desktop/desktop.component';
import { WindowListComponent } from './window-list/window-list.component';
import { HeadListComponent } from './head-list/head-list.component';
import { PanelAddTaskComponent } from './panel-add-task/panel-add-task.component';
import { PanelTaskComponent } from './panel-task/panel-task.component';

@NgModule({
  declarations: [
    AppComponent,
    DesktopComponent,
    WindowListComponent,
    HeadListComponent,
    PanelAddTaskComponent,
    PanelTaskComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
