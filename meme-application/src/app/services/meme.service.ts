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
    return this.http.post<Meme>(this.url + 'kurec', formData).subscribe();
  }

  updateMeme(formData: FormData, id: number) {
    return this.http.put<Meme>(this.url + 'card/' + id, formData).subscribe();
    // return this.http.post<Meme>(this.url + '/kurec', formData).subscribe();
  }

  deleteMeme(id: number): Observable<any> {
    const deleteUrl = this.url + 'card/' + id;
    console.log('evala');
    return this.http.delete(deleteUrl);
  }
}
