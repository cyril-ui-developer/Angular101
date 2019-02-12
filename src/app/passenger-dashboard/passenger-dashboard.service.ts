
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Passenger } from './models/passenger';
import { environment } from '../../environments/environment';


@Injectable({
    providedIn: 'root',
})
export class PassengerDashboardService {
    //const PASSENGERs_URL = 
    constructor(private http: HttpClient) {

    }

    /** GET Passengers from the server */
    getPassengers(): Observable<Passenger[]> {
        return this.http.get<Passenger[]>(`${environment.baseUrl}/passengers`)
        .pipe(
            catchError(this.handleError('getPassengers ', []))
          );
    }

    /** UPDATE Passenger from the server */
    updatePassenger(passenger: Passenger): Observable<Passenger> {
        return this.http.put<Passenger>(`${environment.baseUrl}/passengers/${passenger.id}`, passenger)
        
    }

    /** DELETE Passenger from the server */
    removePassenger(passenger: Passenger): Observable<Passenger> {
        return this.http.delete<Passenger>(`${environment.baseUrl}/passengers/${passenger.id}`)
    }

    /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}