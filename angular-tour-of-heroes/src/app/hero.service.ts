import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { catchError, map, tap } from "rxjs/operators";

import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes'; // URL to Web api

  /* get heroes list */
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl)
    .pipe(
      tap(heroes => this.log('fetched heroes')),
      catchError(this.handleError('getHeroes', []))
    );
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetch hero id= ${id}`);
    return this.http.get<Hero[]>(this.heroesUrl)[0];
    //return of(HEROES.find(hero => hero.id === id));
  }

  constructor(private http: HttpClient, private messageService: MessageService) { }

  // log the message
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  /* Handle Http operation that failed. */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    }
  }
}
