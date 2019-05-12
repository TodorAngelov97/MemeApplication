import { Component, OnInit, Input } from '@angular/core';

import { Meme } from '../../../models/meme.model';

@Component({
  selector: 'app-meme-card',
  templateUrl: './meme-card.component.html',
  styleUrls: ['./meme-card.component.scss']
})
export class MemeCardComponent implements OnInit {

  @Input() meme: Meme;
  constructor() {
  }

  ngOnInit() {
  }


}
