import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PathComponent } from './components/path/path.component';
import { OptionsNavComponent } from './components/options-nav/options-nav.component';
import { PathContentComponent } from './path-content/path-content.component';

@NgModule({
  declarations: [
    AppComponent,
    PathComponent,
    OptionsNavComponent,
    PathContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
