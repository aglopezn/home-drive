import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PathComponent } from './components/path/path.component';
import { OptionsNavComponent } from './components/options-nav/options-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    PathComponent,
    OptionsNavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
