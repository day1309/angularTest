import { Injectable } from '@angular/core';
import { CountryModel } from './../models/country.model';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = environment.url_country;
  }

  getCountries(): Observable<CountryModel[]> {
    const options = {
      headers: new HttpHeaders()
    };
    return this.httpClient.get<CountryModel[]>(this.baseUrl, options).pipe(
      map(countries => countries.map(c => new CountryModel(c)))
    );

  }
}
