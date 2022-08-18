import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { DataTourService } from 'src/services/data.service';

@Component({
  selector: 'app-tour-page',
  templateUrl: './tour-page.component.html',
  styleUrls: ['./tour-page.component.scss']
})
export class TourPageComponent implements OnInit {

  public data: any = [];
  public tourNumber: number = 0;

  // for steps
  public dataSteps: any = [];
  public step: any = [];

  //for UI
  public collapsed : boolean [] = [];
  public allCollapsed : boolean = false;

  constructor(
    private db: AngularFireDatabase,
    private dataTourService: DataTourService
  ) { }

  ngOnInit(): void {
    this.getTourId();
  }

  public getTourId() {
    this.dataTourService.defTourId.subscribe(id => this.tourNumber = id);
    this.getData();
    this.getSteps();
  }

  public getData() {
    const ref = this.db.list("/infoRoutes");
    ref.valueChanges().subscribe((data: any) => {
      this.data = data[this.tourNumber];
      console.log("data es", this.data)
    })
  }

  public getSteps() {
    const ref = this.db.list("/infoSteps");
    ref.valueChanges().subscribe((data: any) => {
      this.dataSteps = data[this.tourNumber];
      console.log("dataSteps es", this.dataSteps);

    })
  }

}
