import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css/dist/js/materialize.min.js';

@Component({
  selector: 'app-options-nav',
  templateUrl: './options-nav.component.html',
  styleUrls: ['./options-nav.component.css']
})
export class OptionsNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', function(){
      let elems = document.querySelector('.fixed-action-btn');
      let instances = M.FloatingActionButton.init(elems, {});
    });

  }

}
