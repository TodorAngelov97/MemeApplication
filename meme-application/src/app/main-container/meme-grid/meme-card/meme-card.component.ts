import { Component, OnInit, Input } from '@angular/core';

import { Meme } from '../../../models/meme.model';

import { MemeService } from '../../../services/meme.service';

@Component({
  selector: 'app-meme-card',
  templateUrl: './meme-card.component.html',
  styleUrls: ['./meme-card.component.scss']
})
export class MemeCardComponent implements OnInit {

  @Input() meme: Meme;
  constructor(private memeService: MemeService) {

  }

  ngOnInit() {

  }

  delete(id: number) {
    console.log('delete successfully')
    this.memeService.deleteMeme(id);
    window.location.reload();
  }

}
