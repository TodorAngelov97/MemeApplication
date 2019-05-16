import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Meme } from '../models/meme.model';

@Injectable({
  providedIn: 'root'
})
export class ExploreService {

  constructor(private http: HttpClient) { }

  getMemes(url: any) {
    console.log(url + '/card');
    return this.http.get<Meme[]>(url + '/card');
  }


}


