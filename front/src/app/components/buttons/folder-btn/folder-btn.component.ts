import { Component, OnInit, Input } from '@angular/core';
import * as M from 'materialize-css/dist/js/materialize.min.js';

@Component({
  selector: 'app-folder-btn',
  templateUrl: './folder-btn.component.html',
  styleUrls: ['./folder-btn.component.css']
})
export class FolderBtnComponent implements OnInit {

  @Input() name: string;

  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit():void {
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems, {
      enterDelay: 500
    });
  }

}
