import { Injectable } from '@angular/core';
import { Tour } from 'src/models/tour';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireList } from '@angular/fire/compat/database';
// import { Firestore } from '@angular/fire/firestore';
// import { where, query, collection } from '@angular/fire/firestore';
// import { Observable } from '@firebase/util';

@Injectable({
  providedIn: 'root'
})
export class ToursService {

  dbTours = '/infoRoutes';
  myToursRef : AngularFireList<Tour>;

  constructor(
    private db: AngularFireDatabase,
    // private afs: Firestore
  ) { 
    this.myToursRef = db.list(this.dbTours);
  }

  getAllTour(): AngularFireList<Tour> {
    return this.myToursRef;
  }

  // getTourFilter( filtro: string ) {
  //   const q = query(collection(this.afs, 'infoRoutes'), where('country', '==', filtro));
  //   return q;
  // }
}
