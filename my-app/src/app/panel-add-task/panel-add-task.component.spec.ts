import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelAddTaskComponent } from './panel-add-task.component';

describe('PanelAddTaskComponent', () => {
  let component: PanelAddTaskComponent;
  let fixture: ComponentFixture<PanelAddTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelAddTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelAddTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
