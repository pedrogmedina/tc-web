import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tc-mobilemenu',
  templateUrl: './mobilemenu.component.html',
  styleUrls: ['./mobilemenu.component.scss']
})
export class MobilemenuComponent implements OnInit {
  
  @Output() stateEvent = new EventEmitter<boolean>();

  stateMobMenu: boolean = false;
  
  leave: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  hide() {
    this.leave = "leave";
    setTimeout (() => {
      this.stateEvent.emit(this.stateMobMenu);
   }, 100);
  }
  
}
