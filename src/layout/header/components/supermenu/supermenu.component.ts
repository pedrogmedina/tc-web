import { Component, OnInit } from '@angular/core';
import { Tour } from 'src/models/tour';
import { ToursService } from 'src/services/tours.service';
import { map, zip } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'tc-supermenu',
  templateUrl: './supermenu.component.html',
  styleUrls: ['./supermenu.component.scss']
})
export class SupermenuComponent implements OnInit {

  tour?: Tour[];
  tourTour?: Tour;
  tourIndex = -1;
  title: string = '';

  data: any = [];

  constructor(
    private toursService: ToursService,
    private db: AngularFireDatabase
  ) { }

  
  ngOnInit(): void {
    this.getData();
  }
  
  // updateTours() : void {
  //   this.tourTour = undefined;
  //   this.tourIndex = -1;

  //   this.getTourData();
  // }

  // getTourData() : void {
  //   this.toursService.getAllTour().snapshotChanges().pipe(
  //     map(resData => {
  //       console.log(resData);
  //     })
  //   )
  //     .subscribe(data => {
  //     console.log(data);
  //   })
  // }

  getData() {
    const ref = this.db.list("infoRoutes");
    ref.valueChanges().subscribe((data: any) => {
      this.data = data;
      
      console.log(this.data);

    })
  }
}
