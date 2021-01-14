import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-path',
  templateUrl: './path.component.html',
  styleUrls: ['./path.component.css']
})
export class PathComponent implements OnInit {

  path: string;
  @Output() inputPath: EventEmitter<string>;

  constructor() {
    this.inputPath = new EventEmitter();
    this.path = '/';
  }

  ngOnInit(): void {
  }

  updatePath( value ) {
    // console.log(`updated path from ${this.path} to ${value}`);
    this.path = value;
    // console.log(this.path);
    this.inputPath.emit(this.path);
  }
}
