import { Component, OnInit, Input } from '@angular/core';

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

}
