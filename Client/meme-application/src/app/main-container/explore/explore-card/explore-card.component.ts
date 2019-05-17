import { Component, OnInit, Input } from '@angular/core';

import { Meme } from '../../../models/meme.model';

@Component({
  selector: 'app-explore-card',
  templateUrl: './explore-card.component.html',
  styleUrls: ['./explore-card.component.scss']
})
export class ExploreCardComponent implements OnInit {

  @Input() meme: Meme;
  constructor() { }

  ngOnInit() {
  }

}
