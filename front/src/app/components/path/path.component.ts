import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-path',
  templateUrl: './path.component.html',
  styleUrls: ['./path.component.css']
})
export class PathComponent implements OnInit {

  @Input() path: string;
  @Output() inputPath: EventEmitter<string>;

  constructor() {
    this.inputPath = new EventEmitter();
  }

  ngOnInit(): void {
  }

  updatePath( value ) {
    this.path = value;
    this.inputPath.emit(this.path);
  }
}
