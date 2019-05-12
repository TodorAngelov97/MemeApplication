import { Component, OnInit } from '@angular/core';

import { MEMES } from '../../mock-memes';



// import {MemeService} from '../../services/meme.service'

@Component({
  selector: 'app-meme-grid',
  templateUrl: './meme-grid.component.html',
  styleUrls: ['./meme-grid.component.scss']
})
export class MemeGridComponent implements OnInit {
  searchText: string;
  memes = MEMES;
  constructor() { }

  ngOnInit() {
  }

}
