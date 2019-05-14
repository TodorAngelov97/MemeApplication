import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Meme } from '../../models/meme.model';
import { HttpClient } from '@angular/common/http';
import { MemeService } from '../../services/meme.service';

@Component({
  selector: 'app-create-meme',
  templateUrl: './create-meme.component.html',
  styleUrls: ['./create-meme.component.scss']
})
export class CreateMemeComponent implements OnInit {

  memeForm: FormGroup;
  url = 'http://localhost:8080';
  playerName: string;
  file: File;

  constructor(private memeService: MemeService) { }

  ngOnInit() {
    // this.memeForm = this.createMemeForm();
  }

  // createMemeForm() {
  //   return new FormGroup({
  //     title: new FormControl('', [Validators.required]),
  //     file: new FormControl('', [Validators.required]),
  //   });
  // }

  fileChanged(event) {
    this.file = event.target.files[0];
  }

  onSubmit() {

    console.log('Data');
    const formData = new FormData();
    formData.append('title', this.playerName);
    formData.append('file', this.file);
    // formData.append('title', this.memeForm.get('title').value);
    // this.file2 = this.memeForm.get('file');
    // console.log(this.file2.value);
    // formData.append('file', this.memeForm.get('file').value);
    this.memeService.addMeme(formData);


  }
  resetForm() {
    this.playerName = ' ';
    this.file = null;
  }
}
