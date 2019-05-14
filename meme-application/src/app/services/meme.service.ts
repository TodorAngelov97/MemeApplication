import { Injectable } from '@angular/core';
import { Meme } from '../models/meme.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemeService {

  url = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  getMemes() {
    return this.http.get<Meme[]>(this.url + '/card');
  }

}
