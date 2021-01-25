import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { PathContentService } from '../../services/path-content.service';
import * as M from 'materialize-css/dist/js/materialize.min.js';

@Component({
  selector: 'app-path-content',
  templateUrl: './path-content.component.html',
  styleUrls: ['./path-content.component.css']
})
export class PathContentComponent implements OnInit, OnChanges {

  dirs: any = [];
  files: any = [];

  @Input() dirPath: string;
  @Output() enterFolder: EventEmitter<string>;


  constructor(private _pathContentService: PathContentService ) { 
    this.enterFolder = new EventEmitter();
  }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges) {
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems, {
      enterDelay: 500
    });
    for (let propName in changes) {
      if (propName === 'dirPath') {
        this.getContentByPath(changes.dirPath.currentValue);
      }
    }
  }

  getContentByPath(dirPath: string){
    this._pathContentService.getContent(dirPath)
    .subscribe( (res: any) => {
      this.dirs = res.data.directories;
      this.files = res.data.files;
    });
  }

  forwardPath(dirname:string){
    this.dirPath = this.dirPath + dirname + '/';
    this.enterFolder.emit(this.dirPath);
  }

  backwardPath(){
    let dirPath:string;
    let arrPath:string[];

    dirPath = this.dirPath;
    if (dirPath[dirPath.length-1] === "/"){
      dirPath = dirPath.slice(0, dirPath.length-1);
    }

    arrPath = dirPath.split("/");
    arrPath = arrPath.slice(0, arrPath.length-1);
    dirPath = arrPath.join("/");
    dirPath = dirPath === "" ? "/" : arrPath.join("/") + "/"

    this.enterFolder.emit(dirPath);  
  }
}
