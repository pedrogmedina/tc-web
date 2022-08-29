import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Tour } from 'src/models/tour';
import { ToursService } from 'src/services/tours.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { DataTourService } from 'src/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<Number>();

  data: any = [];
  tourId: number | undefined = 2;
  
  constructor(
    private toursService: ToursService,
    private db: AngularFireDatabase,
    private dataTourService: DataTourService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  addNewItem(tourId: any) {
    this.newItemEvent.emit(tourId);
  }

  getData() {
    const ref = this.db.list("infoRoutes");
    ref.valueChanges().subscribe((data: any) => {
      this.data = data;
      
      console.log(this.data);

    })
  }
  
  getTourPos($value: number) {
    this.dataTourService.sendTourId($value);
  }
}
