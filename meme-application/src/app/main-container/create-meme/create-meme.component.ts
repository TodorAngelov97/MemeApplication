import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Meme } from '../../models/meme.model';
import { HttpClient } from '@angular/common/http';
import { MemeService } from '../../services/meme.service';
import { Router } from '@angular/router';


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

  constructor(private memeService: MemeService, private router: Router) { }

  ngOnInit() {
  }



  fileChanged(event: any) {
    this.file = event.target.files[0];
  }

  onSubmit() {

    console.log('Data');
    const formData = new FormData();
    formData.append('title', this.playerName);
    formData.append('file', this.file);
    this.memeService.addMeme(formData).subscribe(data => {
      return this.router.navigate(['']);
    });


  }
  resetForm() {
    this.playerName = ' ';
    this.file = null;
  }
}
