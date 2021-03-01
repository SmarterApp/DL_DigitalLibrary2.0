import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Landing } from '../data/landing/model/landing.model';
import { HowHelp } from '../data/landing/model/howhelp.model' ;

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
    else if (this.resourceType === "ir")
      this.getIR();
    else if (this.resourceType === "fs")
      this.getFS();
    else if (this.resourceType === "as")
      this.getAS();      
    else if (this.resourceType === "pl")
      this.getPL();     
  }

  getCP()  {

    let landing = {} as Landing;

    landing.id = 1;
    landing.title = "Interim Connections Playlists";
    landing.type = "cp";
    landing.titleShort = "Playlist";
    landing.introTitle = "Connect student performance to instructional resources.";
    landing.introText = "Playlist link students' results on interim assessments to ELA and math lessions matched to their knowledge and skills.  Playlists help educators ensure that students receive instruction tailored for their individual performance level - a key to accelerating learning.";
    landing.howHelp = [ 
      {id: 1, title: "Support Students",  message: "Use performance progressions to help identify where students are in their learning process and how they can progress to the next level." },
      {id: 2, title: "Understand the Contest",  message: "Each playlist provides the knowledge and skills students need toachieve within a block of grade-level content." },
      {id: 3, title: "Plan Instruction",  message: "Use student performance data to inform and plan instrutional next steps." },
      {id: 3, title: "Take Action",  message: "Use teacher-created instructional resources to support student success." }
    ];

    this.landing = landing;
    };

  getIR()  {

    let landing = {} as Landing;

    landing.id = 2;
    landing.title = "Instructional";
    landing.type = "ir";
    landing.titleShort = "Instructional";
    landing.introTitle = "Instructional introTitle";
    landing.introText = "Instructional introText";
    landing.howHelp = [ 
      {id: 1, title: "Instructional title 1",  message: "Instructional  message 1" },
      {id: 2, title: "Instructional title 2",  message: "Instructional  message 2" },
      {id: 3, title: "Instructional title 3",  message: "Instructional  message 3" }
    ];      
    this.landing = landing;
  };

  getFS()  {

    let landing = {} as Landing;

    landing.id = 3;
    landing.title = "Formative Assessment Strategies";
    landing.type = "fs";
    landing.titleShort = "Formative Assessment";
    landing.introTitle = "Formative Assessment introTitle";
    landing.introText = "Formative Assessment introText";

    this.landing = landing;
  };    

  getAS()  {

    let landing = {} as Landing;

    landing.id = 4;
    landing.title = "Accessibility Strategies";
    landing.type = "as";
    landing.titleShort = "Accessibility";
    landing.introTitle = "Accessibility introTitle";
    landing.introText = "Accessibility introText";      

    this.landing = landing;
  };

  getPL()  {

    let landing = {} as Landing;

    landing.id = 5;
    landing.title = "Professional Learning Resource";
    landing.type = "pl";
    landing.titleShort = "Professional Learning";
    landing.introTitle = "Professional Learning introTitle";
    landing.introText = "Professional Learning introText";

    this.landing = landing;
  };

}
