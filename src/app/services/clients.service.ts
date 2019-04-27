import { Injectable } from '@angular/core';
import { ClientModel } from '../models/client.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class ClientsService {

  private baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = environment.url_clients;
  }

  getAll(country: string, reason: string, name: string): Observable<ClientModel[]> {
    this.baseUrl = `${this.baseUrl}?data={"pais_id":${country},"razon_social":${reason},"nombre_fantasia":${name}}`;
    return this.httpClient.get<any>('../../assets/clients.json').pipe(
      map(clientData => {
        return clientData.data.map(c => {
          if (c.pais === country) {
            return new ClientModel(c);
          }
        });
      })
    );
  }
  getById(id: string | number): Observable<ClientModel> {
    throw new Error('no implemented yet');
  }

  create(elem: ClientModel): Observable<null> {
    throw new Error('no implemented yet');
  }
  edit(elem: ClientModel): Observable<any> {
    throw new Error('no implemented yet');
  }
}
