import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Meme } from '../../../models/meme.model';

import { MemeService } from '../../../services/meme.service';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';

@Component({
  selector: 'app-meme-card',
  templateUrl: './meme-card.component.html',
  styleUrls: ['./meme-card.component.scss']
})
export class MemeCardComponent implements OnInit {

  @Input() meme: Meme;
  @Output() notifyToDeleteMeme: EventEmitter<number> = new EventEmitter<number>();
  constructor(private memeService: MemeService, private router: Router) {

  }

  ngOnInit() {

  }

  // return this.router.navigate([''])
  // delete() {
  //   console.log('delete successfully');
  //   return this.memeService.deleteMeme(this.meme.id).subscribe(() => {
  //     window.location.reload();
  //   });
  //   // window.location.reload()
  // }


  deleteMeme() {
    console.log('ssss');
    const currentId = this.meme.id;
    this.notifyToDeleteMeme.emit(currentId);
  }

}
