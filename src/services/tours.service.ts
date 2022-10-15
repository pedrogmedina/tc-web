import { Injectable } from '@angular/core';
import { Tour } from 'src/models/tour';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireList } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class ToursService {

  dbTours = '/infoRoutes';
  myToursRef : AngularFireList<Tour>;

  constructor(
    private db: AngularFireDatabase
  ) { 
    this.myToursRef = db.list(this.dbTours);
  }

  getAllTour(): AngularFireList<Tour> {
    return this.myToursRef;
  }

  getTourFilter( filtro: string ) {
  }
}
