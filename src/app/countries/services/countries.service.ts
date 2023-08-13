import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {
  constructor(private http: HttpClient) { }

  private apiUrl:string='https://restcountries.com/v3.1';

  searchCapital(capital:string):Observable<Country[]>{
    const url:string=`${this.apiUrl}/capital/${capital}`;
    return this.http.get<Country[]>(url)
    .pipe(
      catchError(()=>of([]))
    );
  }

  searchCountry(name:string):Observable<Country[]>{
    const url:string=`${this.apiUrl}/name/${name}`;
    return this.http.get<Country[]>(url)
    .pipe(
      catchError(()=>of([]))
    );
  }

  searchRegion(region:string):Observable<Country[]>{
    const url:string=`${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url)
    .pipe(
      catchError(()=>of([]))
    );
  }
}
