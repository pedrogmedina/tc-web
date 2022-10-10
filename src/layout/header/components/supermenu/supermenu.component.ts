import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { Tour } from 'src/models/tour';
import { ToursService } from 'src/services/tours.service';
import { map, zip } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'tc-supermenu',
  templateUrl: './supermenu.component.html',
  styleUrls: ['./supermenu.component.scss'],
  animations: [
    trigger("wrapperSuperMenu", [
      transition(":enter", [
        style({opacity: 0, transform: "translateY(-100%)" }),
        animate (
          "2s",
          style({ opacity: 1, transform: "translateY(0)", background: "red", })
        )
      ]),
      transition(":leave", [
        style({opacity: 1, transform: "translateY(0)" }),
        animate (
          "2s",
          style({ opacity: 0, transform: "translateY(-100%)" })
        )
      ])
    ]), 
  ]
})
export class SupermenuComponent implements OnInit {

  @Output() stateEvent = new EventEmitter<boolean>();

  stateMenu: boolean = false;

  tour?: Tour[];
  tourTour?: Tour;
  tourIndex = -1;
  title: string = '';

  leave: string = '';

  data: any = [];

  constructor(
    private toursService: ToursService,
    private db: AngularFireDatabase
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    const ref = this.db.list("infoRoutes");
    ref.valueChanges().subscribe((data: any) => {
      this.data = data;
      
      console.log(this.data);

    })
  }

  hide() {
    this.leave = "leave";
    setTimeout (() => {
      this.stateEvent.emit(this.stateMenu);
   }, 100);
  }
}
