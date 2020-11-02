import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private backendURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public vehiclesIndex(): Observable<any> {
    console.log('Vehicles');

    return this.http.get(this.backendURL + '/vehicles');
  }

  public productsIndex(): Observable<any> {
    console.log('Products');

    return this.http.get(this.backendURL + '/products');
  }
}
