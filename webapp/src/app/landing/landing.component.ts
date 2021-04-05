import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'sbdl-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  resourceType: string;
  
  constructor(private route: ActivatedRoute,
    private router: Router) { 
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.resourceType = this.route.snapshot.paramMap.get('resourceType');
  }

}
