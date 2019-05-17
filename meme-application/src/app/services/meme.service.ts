import { Injectable } from '@angular/core';
import { Meme } from '../models/meme.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemeService {

  url = '/';
  constructor(private http: HttpClient) { }

  getMemes() {
    return this.http.get<Meme[]>(this.url + 'card');
  }



  addMeme(formData: FormData) {
    return this.http.post<Meme>(this.url + 'kurec', formData);
  }

  updateMeme(formData: FormData, id: number) {
    return this.http.put<Meme>(this.url + 'card/' + id, formData);
  }

  deleteMeme(id: number) {
    const deleteUrl = this.url + 'card/' + id;
    console.log('evala');
    return this.http.delete<Meme>(deleteUrl);
  }
}
