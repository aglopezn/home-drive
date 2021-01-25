import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css/dist/js/materialize.min.js';

@Component({
  selector: 'app-back-btn',
  templateUrl: './back-btn.component.html',
  styleUrls: ['./back-btn.component.css']
})
export class BackBtnComponent implements OnInit {

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
