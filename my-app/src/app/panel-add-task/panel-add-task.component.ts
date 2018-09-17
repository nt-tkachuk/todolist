import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-panel-add-task',
  templateUrl: './panel-add-task.component.html',
  styleUrls: ['./panel-add-task.component.css']
})
export class PanelAddTaskComponent implements OnInit {

  textPlaceholder: string = 'Start typing here to create a task';

  _height: number = 34;// высота
  _width: number = 428;// ширина

  @Input ('text') text = ''; //text: string = 'text';
  @Input ('otstup') otstup: number = 8; // отступ для рамки
  @Input ('funDown') funDown: any; // отступ для рамки
  @Input ('wButton') wButton: number = 80; // отступ для рамки
  @Input ('wButton') hButton: number = 21; // отступ для рамки

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
