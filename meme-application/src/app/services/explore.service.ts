import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Meme } from '../models/meme.model';

@Injectable({
  providedIn: 'root'
})
export class ExploreService {

  constructor(private http: HttpClient) { }

  getMemes(url: any) {
    console.log(url + '/meme');
    return this.http.get<Meme[]>(url + '/meme');
  }

  searchAdvanced(key: string) {
    console.log("in search");
    const URL = 'http://localhost:8080';
    const requestUrl = URL + '/advanced-search/' + key;
    return this.http.get<Meme[]>(requestUrl);
  }

}


