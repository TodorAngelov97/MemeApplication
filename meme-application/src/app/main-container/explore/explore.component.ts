import { Component, OnInit } from '@angular/core';
import { Domain } from '../../models/domain.model';
import { Meme } from '../../models/meme.model';
import { DomainService } from '../../services/domain.service';
import { ExploreService } from '../../services/explore.service';
import { stringify } from '@angular/core/src/util';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  domains: Domain[];
  memes: Meme[];
  address: string;

  constructor(private domainService: DomainService, private exploreService: ExploreService) { }

  ngOnInit() {
    this.getDomains();
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


}
