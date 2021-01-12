import { Component, OnInit } from '@angular/core';
import { PathContentService } from '../../services/path-content.service';

@Component({
  selector: 'app-path-content',
  templateUrl: './path-content.component.html',
  styleUrls: ['./path-content.component.css']
})
export class PathContentComponent implements OnInit {

  dirs: any = [];
  files: any = [];

  constructor(private _pathContentService: PathContentService ) { 
    this.getContentByPath('/');
  }

  ngOnInit(): void {
  }

  getContentByPath(dirPath: string){
    this._pathContentService.getContent(dirPath)
    .subscribe( (res: any) => {
      this.dirs = res.data.directories;
      this.files = res.data.files;
      console.log(this.dirs);
      console.log(this.files);
    });
  }
}
