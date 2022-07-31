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
  public tourSteps: any = [];
  public obj: any = [];

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
  }

  public getData() {
    const ref = this.db.list("infoRoutes");
    ref.valueChanges().subscribe((data: any) => {
      this.data = data[this.tourNumber];
      
      this.obj = this.data.steps;
    
      console.log("dataNum es", this.data)
      console.log("Obj es:", this.obj);
    })
  }

}
