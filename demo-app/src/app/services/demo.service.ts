import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

import { environment } from '../../environments/environment';

export interface Demo {
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  private env = environment;
  private url: string = `${this.env.tamServiceApi}/demo-endpoint`

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getDemoName(): Observable<Demo[]> {
    return this.http.get<Demo[]>(this.url, { headers: this.httpOptions.headers })
    // .pipe(
    //   catchError((err) => {
    //     return this.errorHandler(err);
    //   }));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(() => new Error());
  }
}
