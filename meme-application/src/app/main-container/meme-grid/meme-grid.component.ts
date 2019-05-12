import { Component, OnInit } from '@angular/core';

import { MEMES } from '../../mock-memes';
@Component({
  selector: 'app-meme-grid',
  templateUrl: './meme-grid.component.html',
  styleUrls: ['./meme-grid.component.scss']
})
export class MemeGridComponent implements OnInit {

  memes = MEMES;
  constructor() { }

  ngOnInit() {
  }

}
