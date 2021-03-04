import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Landing } from '../data/landing/model/landing.model';
import { HowHelp } from '../data/landing/model/howhelp.model' ;
//import { HowUse } from '../data/landing/model/howhelp.model';
import { Grade } from '../data/resource/model/grade.model';
import { Subject } from '../data/resource/model/subject.model';

@Component({
  selector: 'sbdl-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  landing: Landing;
  resourceType: string;
  grades: Grade[];
  selectedGrade: string = "";
  subjects: Subject[];
  selectedSubject: string = "";


  constructor(
    private route: ActivatedRoute,
    private router: Router) { 
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;

      this.grades = [
        { code: 'g3', shortName: '3', longName: 'Grade 3' },
        { code: 'g4', shortName: '4', longName: 'Grade 4' },
        { code: 'g5', shortName: '5', longName: 'Grade 5' },
        { code: 'g6', shortName: '6', longName: 'Grade 6' },
        { code: 'g7', shortName: '7', longName: 'Grade 7' },
        { code: 'g8', shortName: '8', longName: 'Grade 8' },
        { code: 'ghs', shortName: 'HS', longName: 'High School' }];

      this.subjects = [
        { code: 'ela', shortName: 'eng', fullName: 'English Language Arts' },
        { code: 'math', shortName: 'math', fullName: 'Mathematics' }
        ]
    }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.resourceType = this.route.snapshot.paramMap.get('resourceType');

    if (this.resourceType === "icp")
      this.getCP();
    else if (this.resourceType === "ir")
      this.getIR();
    else if (this.resourceType === "fasr")
      this.getFS();
    else if (this.resourceType === "asr")
      this.getAS();      
    else if (this.resourceType === "plr")
      this.getPL();    
    else if (this.resourceType === "iaip")
      this.getIAI();  
  }

  getCP()  {

    let landing = {} as Landing;

    landing.id = 1;
    landing.title = "Interim Connections Playlists";
    landing.type = "icp";
    landing.howDoIUse = "Playlist";
    landing.introTitle = "Connect student performance to instructional resources.";
    landing.introText = "Playlist link students' results on interim assessments to ELA and math lessions matched to their knowledge and skills.  Playlists help educators ensure that students receive instruction tailored for their individual performance level - a key to accelerating learning.";
    landing.promotedVideoLink = "https://www.youtube.com/embed/wpwZCqvt70U";
    landing.promotedVideoMessage = "Understanding the Smarter Balanced Interim Assessments";
    landing.howHelp = [ 
      {id: 1, title: "Support Students",  message: "Use performance progressions to help identify where students are in their learning process and how they can progress to the next level." },
      {id: 2, title: "Understand the Contest",  message: "Each playlist provides the knowledge and skills students need toachieve within a block of grade-level content." },
      {id: 3, title: "Plan Instruction",  message: "Use student performance data to inform and plan instrutional next steps." },
      {id: 3, title: "Take Action",  message: "Use teacher-created instructional resources to support student success." }
    ];

    landing.howUse = [
      {id: 1, title: "Before Instruction",  message: "Use the content standards on the playlist with your curriclum to ensure you teach the grade-level content before giving an interim assessment." },
      {id: 2, title: "During Instruction",  message: "Use Performance Progressions as an observation too; and make sure the Academic Vocabulary is part of instruction." },
      {id: 3, title: "Maximize the Use of Interims",  message: "Each interim block has a corresponding playlist with performance progressions that describes what students know or can do for each tipic, as well as instructional resource you can use to support instuctional next steps." },
      {id: 4, title: "Goal Setting and Success Criteria",  message: "Use Performance Progressions with students as a goal-setting tool.  Once you have identified where students are in their learning, use the progressions to differentiate instructionm and move learning forward." },
    ];

    landing.diveDeeperHeader = "Check out these additional resources to learn more about Playlists.";
    landing.diveDeeper = [
      {id: 1, title: "Formative Assessment Process Flier",  link: "https://portal.smarterbalanced.org/library/en/formative-assessment-process.pdf" },
      {id: 1, title: "Usability, Accessibility, and Accommodations Guidelines",  link: "https://portal.smarterbalanced.org/library/en/usability-accessibility-and-accommodations-guidelines.pdf" },
      {id: 1, title: "Individual Student Assessment Accessibility Profile (ISAAP) Tool",  link: "https://portal.smarterbalanced.org/library/en/about-the-individual-student-assessment-accessibility-profile-isaap-process-and-the-isaap-tool.pdf" },
    ];

    landing.samplePlaylist = [
      { id: 1, title: "Place Value Rumble", resourceId: "117", grade: "Grade 3", subject: "Math" },
      { id: 2, title: "Breaking Down Numbers", resourceId: "118", grade: "Grade 4", subject: "Math" },
    ];
   
    this.landing = landing;
    };

  getIR()  {

    let landing = {} as Landing;

    landing.id = 2;
    landing.title = "Instructional Resources";
    landing.type = "ir";
    landing.howDoIUse = "Instructional";
    landing.introTitle = "Instructional introTitle";
    landing.introText = "Instructional introText";
    landing.diveDeeperHeader = "Check out these additional resources to learn more about using the formative assessment process during instruction.";
    landing.howHelp = [ 
      {id: 1, title: "Instructional title 1",  message: "Instructional  message 1" },
      {id: 2, title: "Instructional title 2",  message: "Instructional  message 2" },
      {id: 3, title: "Instructional title 3",  message: "Instructional  message 3" }
    ];      
    landing.diveDeeper = [
      {id: 1, title: "Formative Assessment Process Flier",  link: "https://portal.smarterbalanced.org/library/en/formative-assessment-process.pdf" },
      {id: 1, title: "Usability, Accessibility, and Accommodations Guidelines",  link: "https://portal.smarterbalanced.org/library/en/usability-accessibility-and-accommodations-guidelines.pdf" },
      {id: 1, title: "Individual Student Assessment Accessibility Profile (ISAAP) Tool",  link: "https://portal.smarterbalanced.org/library/en/about-the-individual-student-assessment-accessibility-profile-isaap-process-and-the-isaap-tool.pdf" },
    ];
    this.landing = landing;
  };

  getFS()  {

    let landing = {} as Landing;

    landing.id = 3;
    landing.title = "Formative Assessment Strategies";
    landing.type = "fasr";
    landing.howDoIUse = "Formative Assessment";
    landing.introTitle = "Formative Assessment introTitle";
    landing.introText = "Formative Assessment introText";
    landing.diveDeeperHeader = "Check out these additional resources to learn more about the Formative Assessment Process.";
    landing.diveDeeper = [
      {id: 1, title: "Formative Assessment Process Flier",  link: "https://portal.smarterbalanced.org/library/en/formative-assessment-process.pdf" },
      {id: 1, title: "Usability, Accessibility, and Accommodations Guidelines",  link: "https://portal.smarterbalanced.org/library/en/usability-accessibility-and-accommodations-guidelines.pdf" },
      {id: 1, title: "Individual Student Assessment Accessibility Profile (ISAAP) Tool",  link: "https://portal.smarterbalanced.org/library/en/about-the-individual-student-assessment-accessibility-profile-isaap-process-and-the-isaap-tool.pdf" },
    ];
    this.landing = landing;
  };    

  getAS()  {

    let landing = {} as Landing;

    landing.id = 4;
    landing.title = "Accessibility Instructional Strategies";
    landing.type = "asr";
    landing.howDoIUse = "Accessibility";
    landing.introTitle = "Accessibility introTitle";
    landing.introText = "Accessibility introText";      
    landing.diveDeeperHeader = "Check out these additional resources to learn more about accessibility.";
    landing.diveDeeper = [
      {id: 1, title: "Formative Assessment Process Flier",  link: "https://portal.smarterbalanced.org/library/en/formative-assessment-process.pdf" },
      {id: 1, title: "Usability, Accessibility, and Accommodations Guidelines",  link: "https://portal.smarterbalanced.org/library/en/usability-accessibility-and-accommodations-guidelines.pdf" },
      {id: 1, title: "Individual Student Assessment Accessibility Profile (ISAAP) Tool",  link: "https://portal.smarterbalanced.org/library/en/about-the-individual-student-assessment-accessibility-profile-isaap-process-and-the-isaap-tool.pdf" },
    ];
    this.landing = landing;
  };

  getPL()  {

    let landing = {} as Landing;

    landing.id = 5;
    landing.title = "Professional Learning Resources";
    landing.type = "plr";
    landing.howDoIUse = "Professional Learning";
    landing.introTitle = "Professional Learning introTitle";
    landing.introText = "Professional Learning introText";
    landing.diveDeeperHeader = "Check out these additional resources to learn more about using a balanced assessment system.";
    landing.diveDeeper = [
      {id: 1, title: "Formative Assessment Process Flier",  link: "https://portal.smarterbalanced.org/library/en/formative-assessment-process.pdf" },
      {id: 1, title: "Usability, Accessibility, and Accommodations Guidelines",  link: "https://portal.smarterbalanced.org/library/en/usability-accessibility-and-accommodations-guidelines.pdf" },
      {id: 1, title: "Individual Student Assessment Accessibility Profile (ISAAP) Tool",  link: "https://portal.smarterbalanced.org/library/en/about-the-individual-student-assessment-accessibility-profile-isaap-process-and-the-isaap-tool.pdf" },
    ];
    this.landing = landing;
  };

  getIAI()  {

    let landing = {} as Landing;

    landing.id = 2;
    landing.title = "Interim Assessment Item Portal";
    landing.type = "iaip";
    landing.howDoIUse = "the IAIP";
    landing.introTitle = "A better way to access and use interim test questions.";
    landing.introText = "Access the Intererim Assessment Item Portal (IAIP) to quickly find and use interim items in more flexible wasy than ever before. Whether viewing them on the website or printing them out, high-quality, content-specific items aew a few clicks away and ready for classroom use.";
    landing.promotedVideoLink = "https://www.youtube.com/embed/wpwZCqvt70U";
    landing.promotedVideoMessage = "Understanding the Smarter Balanced Interim Assessments";
    landing.howHelp = [ 
      {id: 1, title: "Support Students",  message: "Railor the content that is comvered by and interim assess,emt to better align with the focus of instruction." },
      {id: 2, title: "Flexible Use",  message: "Print interim assessmemt items to use contesnt in more ways and support access outside of computer labs." },
      {id: 3, title: "Formative Assessment",  message: "Quickly and easily use interim items to support students through the use of formative assessment practices." },
      {id: 3, title: "Professiional Learning",  message: "Better inderstand the context of an assessment to plan test adminnistration in the school year by viewing items inclded in the assesments." }
    ];

    landing.howUse = [
      {id: 1, title: "Before Instruction",  message: "Use the content standards on the playlist with your curriclum to ensure you teach the grade-level content before giving an interim assessment." },
      {id: 2, title: "During Instruction",  message: "Use Performance Progressions as an observation too; and make sure the Academic Vocabulary is part of instruction." },
      {id: 3, title: "Maximize the Use of Interims",  message: "Each interim block has a corresponding playlist with performance progressions that describes what students know or can do for each tipic, as well as instructional resource you can use to support instuctional next steps." },
      {id: 4, title: "Goal Setting and Success Criteria",  message: "Use Performance Progressions with students as a goal-setting tool.  Once you have identified where students are in their learning, use the progressions to differentiate instructionm and move learning forward." },
    ];

    landing.diveDeeperHeader = "Check out these additional resources to learn more about using individual items during instruction.";
    landing.diveDeeper = [
      {id: 1, title: "Formative Assessment Process Flier",  link: "https://portal.smarterbalanced.org/library/en/formative-assessment-process.pdf" },
      {id: 1, title: "Usability, Accessibility, and Accommodations Guidelines",  link: "https://portal.smarterbalanced.org/library/en/usability-accessibility-and-accommodations-guidelines.pdf" },
      {id: 1, title: "Individual Student Assessment Accessibility Profile (ISAAP) Tool",  link: "https://portal.smarterbalanced.org/library/en/about-the-individual-student-assessment-accessibility-profile-isaap-process-and-the-isaap-tool.pdf" },
    ];

    //landing.samplePlaylist = [];
   
    this.landing = landing;
    };
}
