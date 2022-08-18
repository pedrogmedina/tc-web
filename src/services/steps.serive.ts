import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
    
export class StepsService {

    public tourId$ = new BehaviorSubject<number>(0);

    defTourId = this.tourId$.asObservable();

    constructor(){}

    public sendTourId(id: number) {
        this.tourId$.next(id);
    }
}
