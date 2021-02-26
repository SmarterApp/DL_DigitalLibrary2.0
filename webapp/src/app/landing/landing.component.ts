import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Landing } from '../data/landing/model/landing.model';

@Component({
  selector: 'sbdl-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  landing: Landing;
  resourceType: string;
 
  constructor(
    private route: ActivatedRoute,
    private router: Router) { 
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.resourceType = this.route.snapshot.paramMap.get('resourceType');

    if (this.resourceType === "cp")
      this.getCP();
    
  }

  getCP()  {

    let landing = {} as Landing;

    landing.id = 1;
    landing.title = "Interim Connections Playlist";
    landing.type = "cp";
      
    this.landing = landing;

    };
}
