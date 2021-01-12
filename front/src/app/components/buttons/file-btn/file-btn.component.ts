import { Component, Input, OnInit } from '@angular/core';
import * as M from 'materialize-css/dist/js/materialize.min.js';

@Component({
  selector: 'app-file-btn',
  templateUrl: './file-btn.component.html',
  styleUrls: ['./file-btn.component.css']
})
export class FileBtnComponent implements OnInit {

  @Input() name: string;

  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit():void {
    
    var elems = document.querySelectorAll('.tooltipped');
    console.log("document on load");
    var instances = M.Tooltip.init(elems, {
      enterDelay: 500
    });
  }

}
