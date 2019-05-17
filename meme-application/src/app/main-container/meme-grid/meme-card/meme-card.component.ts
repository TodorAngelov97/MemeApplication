import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Meme } from '../../../models/meme.model';

import { MemeService } from '../../../services/meme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-meme-card',
  templateUrl: './meme-card.component.html',
  styleUrls: ['./meme-card.component.scss']
})
export class MemeCardComponent implements OnInit {

  @Input() meme: Meme;
  @Output() deleteCurrentMeme = new EventEmitter();
  constructor(private memeService: MemeService) {

  }

  ngOnInit() {

  }

  // delete(id: number) {
  //   console.log('delete successfully');
  //   this.memeService.deleteMeme(id).subscribe();
  //   // window.location.reload();
  // }

  deleteMeme() {
    console.log('ssss');
    const currentId = this.meme.id;
    this.deleteCurrentMeme.emit(currentId);
  }

}
