import { Injectable } from '@angular/core';
import { Domain } from '../models/domain.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DomainService {

  URL = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  getDomains() {
    return this.http.get<Domain[]>(this.URL + '/domain');
  }
}
