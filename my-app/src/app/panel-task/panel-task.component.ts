import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-panel-task',
  templateUrl: './panel-task.component.html',
  styleUrls: ['./panel-task.component.css']
})
export class PanelTaskComponent implements OnInit {

  textPlaceholder: string = 'Start typing here to create a task';

  _height: number = 34;// высота
  _width: number = 428;// ширина


  @Input ('text') text = ''; //text: string = 'text';
  @Input ('otstup') otstup: number = 8; // отступ для рамки
  @Input ('funDown') funDown: any; // отступ для рамки
  @Input ('wButton') wButton: number = 80; // отступ для рамки
  @Input ('wButton') hButton: number = 21; // отступ для рамки

  isDone: boolean = false;
  isOver = false;

  link: string = "../assets/cat_purr.png";
  link1: string = "../assets/cat_purr.png";
  link2: string = "../assets/cat_purr.png";
  link3: string = "../assets/cat_purr.png";

  constructor() { }

  ngOnInit() {
  }

  mousedown (_e) {
    if (this.funDown) this.funDown(_e);
  };

  mouseover (_e) {
    this.isOver = true;
  };

  mouseout (_e) {
    this.isOver = false;
  };

  @Input()
  set height(_h:number) {
    this._height = _h;
  }
  get hPanel() { return this._height; }

  @Input()
  set width(_w:number) {
    this._width = _w;
  }
  get wPanel() { return this._width;}
}
