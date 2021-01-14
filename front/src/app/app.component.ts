import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';
  path = '/';
  
  setPath(dirPath){
    this.path = dirPath;
    console.log(this.path);
  }


}
