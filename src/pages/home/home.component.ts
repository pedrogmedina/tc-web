import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { DataTourService } from 'src/services/data.service';
import { ToursService } from 'src/services/tours.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<Number>();

  data: any = [];
  tourId: number | undefined = 2;
  filterRes: any = [];
  
  constructor(
    private db: AngularFireDatabase,
    private dataTourService: DataTourService,
    private tourService: ToursService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  addNewItem(tourId: any) {
    this.newItemEvent.emit(tourId);
  }

  getData() {
    const ref = this.tourService.getAllTour();
    ref.valueChanges().subscribe((data: any) => {
      this.data = data;
    })
  }
  
  getTourPos($value: number) {
    this.dataTourService.sendTourId($value); 
  }
}
