import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Meme } from '../../models/meme.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-meme',
  templateUrl: './create-meme.component.html',
  styleUrls: ['./create-meme.component.scss']
})
export class CreateMemeComponent implements OnInit {
  constructor(private http: HttpClient) { }

  memeForm: FormGroup;
  url: String = 'http://localhost:8080';
  createMemeForm() {
    return new FormGroup({
      title: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
    });
  }



  ngOnInit() {
    this.memeForm = this.createMemeForm();
  }

  onSubmit() {

    const formData = new FormData();
    formData.append('title', this.memeForm.get('title').value);
    formData.append('file', this.memeForm.get('image').value);

    return this.http.post<Meme>(this.url + '/kurec', formData).subscribe();

  }
}
