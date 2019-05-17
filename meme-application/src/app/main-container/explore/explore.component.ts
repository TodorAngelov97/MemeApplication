import { Component, OnInit } from '@angular/core';
import { Domain } from '../../models/domain.model';
import { Meme } from '../../models/meme.model';
import { DomainService } from '../../services/domain.service';
import { ExploreService } from '../../services/explore.service';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  domains: Domain[];
  memes: Meme[];
  address: string;
  key: string;
  suggestionWord: string;
  noMatches: boolean;
  constructor(private domainService: DomainService, private exploreService: ExploreService) { }

  ngOnInit() {
    this.getDomains();
    this.noMatches = false;
  }

  getDomains(): void {
    this.domainService.getDomains().subscribe(domains => this.domains = domains);
  }

  getMemes(name: string): void {
    this.memes = null;
    console.log('getmemes');
    console.log(name);
    this.getCorrectDomain(name);
    this.address = this.getCorrectDomain(name);
    console.log(this.address);
    this.exploreService.getMemes(this.address).subscribe(memes => this.memes = memes);
    console.log('getted all memems');
  }

  getCorrectDomain(name: string): string {

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.domains.length; ++i) {
      if (this.domains[i].name === name) {
        return this.domains[i].address;
      }
    }
    return ' ';
  }

  search(): void {
    console.log('vlizam');
    console.log(this.key);
    this.exploreService.searchAdvanced(this.key).subscribe(memes => this.memes = this.isSuggestion(memes));
    console.log('vlizam2');
  }
  isSuggestion(memes: Meme[]): Meme[] {

    if (memes.length === null || memes.length === 1) {
      console.log('forst');
      if (memes[0].image === 'empty') {
        console.log('secod');
        this.suggestionWord = memes[0].title;
        memes = null;
        this.noMatches = true;
        console.log(this.suggestionWord);
      }
    }
    console.log('s');
    return memes;
  }

}
