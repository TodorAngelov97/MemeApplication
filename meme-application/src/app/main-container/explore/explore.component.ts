import { Component, OnInit } from '@angular/core';
import { Domain } from '../../models/domain.model';
import { DomainService } from '../../services/domain.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  domains: Domain[];

  constructor(private domainService: DomainService) { }

  ngOnInit() {
    this.getDomains();
  }

  getDomains(): void {
    this.domainService.getDomains().subscribe(domains => this.domains = domains);
  }

}
