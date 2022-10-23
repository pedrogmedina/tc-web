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
  dataList: any = [];

  tourId: number | undefined = 2;

  // Var for List and Filters list
  filter = '';
  filterValue: string  = '';  // Iniciamos countSelected vacío
  countries: any = []; //Array for countries filter
  filterType: string = ''; 
  
  constructor(
    private db: AngularFireDatabase,
    private dataTourService: DataTourService,
    private tourService: ToursService
    ) { 
      this.countries = [
        { name: "Alemania", prop: "GER" },
        { name: "España", prop: "ES" },
        { name: "Francia", prop: "FR" },
      ];
    }
    
    ngOnInit(): void {
      this.getData();
      this.shortList();
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
  
  shortList(filter?: string, filterType?: string) {
    const ref = this.tourService.getAllTour();
    ref.valueChanges().subscribe((data: any) => {
      if(filter && filterType == 'country') {
        this.dataList = data.filter((obj: { country: string; }) => obj.country === filter);
      } else {
        this.dataList = data;
      }
    })
  }

  public filterByfilter($value : string) {
    this.filterType = $value;
    this.filter = this.filterValue;
    this.shortList(this.filter, this.filterType);
  }

  getTourPos($value: number) {
    this.dataTourService.sendTourId($value); 
  }
}
