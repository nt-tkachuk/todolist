import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-window-list',
  templateUrl: './window-list.component.html',
  styleUrls: ['./window-list.component.css']
})

export class WindowListComponent implements OnInit {
  // _height: number = 34;// высота
  // _width: number = 428;// ширина

  @Input ('text') text = 'text'; //text: string = 'text';
  // @Input ('otstup') otstup: number = 4; // отступ для рамки

  constructor() {}

  ngOnInit() {
  }

  funDownHeader (_e) {
    console.trace("jjj", _e.toElement.name);
  }
  // @Input()
  // set height(_h:number) {
  //   this._height = _h;
  //
  // }
  // get hPanel() { return this._height; }
  //
  // @Input()
  // set width(_w:number) {
  //   this._width = _w;
  // }
  // get wPanel() { return this._width;}

}
