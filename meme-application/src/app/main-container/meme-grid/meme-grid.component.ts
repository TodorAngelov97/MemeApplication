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


  delete(id: number): Observable<any> {
    console.log('delete successfully');
    return this.memeService.deleteMeme(id);
    // window.location.reload()
  }

  getMemesAfterDelete(id: number): void {
    console.log('second stage');
    this.delete(id).subscribe(() => this.getMemes());
  }

}
