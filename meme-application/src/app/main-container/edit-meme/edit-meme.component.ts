import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Meme } from '../../models/meme.model';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-edit-meme',
  templateUrl: './edit-meme.component.html',
  styleUrls: ['./edit-meme.component.scss']
})
export class EditMemeComponent implements OnInit {
  memeForm: FormGroup;
  url = 'http://localhost:8080';


  constructor(private http: HttpClient) { }

  // createMemeForm() {
  //   return new FormGroup({
  //     title: new FormControl('', [Validators.required]),
  //     image: new FormControl('', [Validators.required]),
  //   });
  // }



  ngOnInit() {
  }





}


