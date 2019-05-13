import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Meme } from '../../models/meme.model';

@Component({
  selector: 'app-create-meme',
  templateUrl: './create-meme.component.html',
  styleUrls: ['./create-meme.component.scss']
})
export class CreateMemeComponent implements OnInit {

  memeForm = new FormGroup({
    title: new FormControl(''),
    image: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {


  }
}
