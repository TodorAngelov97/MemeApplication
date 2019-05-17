import { Component, OnInit } from '@angular/core';


import { MemeService } from '../../services/meme.service';
import { Meme } from '../../models/meme.model';
import { Observable } from 'rxjs';


//  import {MemeService} from '../../services/meme.service'

@Component({
  selector: 'app-meme-grid',
  templateUrl: './meme-grid.component.html',
  styleUrls: ['./meme-grid.component.scss']
})
export class MemeGridComponent implements OnInit {
  searchText: string;
  memes: Meme[];
  p = 1;
  constructor(private memeService: MemeService) { }

  ngOnInit() {
    this.getMemes();
  }

  getMemes(): void {
    this.memeService.getMemes().subscribe(memes => this.memes = memes);
  }

  delete(e: any) {
    this.memeService.deleteMeme(e).subscribe(() => this.getMemes());
  }


}
