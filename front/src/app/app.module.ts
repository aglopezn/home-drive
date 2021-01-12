import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PathComponent } from './components/path/path.component';
import { OptionsNavComponent } from './components/options-nav/options-nav.component';
import { PathContentComponent } from './components/path-content/path-content.component';
import { FolderBtnComponent } from './components/buttons/folder-btn/folder-btn.component';
import { FileBtnComponent } from './components/buttons/file-btn/file-btn.component';
import { BackBtnComponent } from './components/buttons/back-btn/back-btn.component';
import { PathContentService } from './services/path-content.service';

@NgModule({
  declarations: [
    AppComponent,
    PathComponent,
    OptionsNavComponent,
    PathContentComponent,
    FolderBtnComponent,
    FileBtnComponent,
    BackBtnComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    PathContentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
