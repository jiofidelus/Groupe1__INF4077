import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class GeolocalisationService {

  coordinates: any;

  constructor() { }

  public getPosition(): Observable<Position> {
    return Observable.create(
      (observer) => {
        navigator.geolocation.watchPosition((pos: Position) => {
          observer.next(pos);
        }),
          // tslint:disable-next-line:no-unused-expression
          () => {
            console.log('Position is not available');
          },
          // tslint:disable-next-line:no-unused-expression
          {
            enableHighAccuracy: true
          };
      });
  }
}
