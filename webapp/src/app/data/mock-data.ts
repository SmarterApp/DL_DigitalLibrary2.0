import { InstructionalResource } from './resource/model/instructional.model';
import { AccessibilityStrategyResource } from './resource/model/accessibility-strategy.model';
import { FormativeStrategyResource } from './resource/model/formative-strategy.model';
import { ProfessionalLearningResource } from './resource/model/professional-learning.model';
import { PlaylistResource } from './resource/model/playlist.model';
import { ResourceType } from './resource/model/resource-type.enum';
import { ResourceSummary } from './resource/model/summary.model';
import { SearchFilters } from './search/search-filters.model';

export const mockUser = {
    firstName: 'Mary',
    lastName: 'Anderson',
    tenantName: 'California'
};

export const mockInstructionalResource: InstructionalResource = {
  id: 0,
  teaser: false,
  type: ResourceType.Instructional,
  properties: {
    authorOrg: '',
    authors: [''],
    claims: [],
    grades: [],
    image: '',
    lastUpdatedDate: new Date(),
    standards: [],
    subject: {
      code: 'math',
      shortName: 'Math',
      fullName: 'Mathematics'
    },
    targets: [],
    title: ''
  },
  attachments: [],
  thingsToConsider: '',
  getStarted: {
    overview: '',
    learningGoal: '',
    successCriteria: ''
  },
  stepByStep: [],
  accessibilityStrategies: [],
  formativeAssessmentStrategies: [],
  differentiation: '',
  formativeAssessHowTo: {
    clarify: '',
    elicit: '',
    interpret: '',
    act: ''
  }
};

export const mockResourceSummaries: ResourceSummary[] = [

  {
    "id": 200,
    "type": ResourceType.Instructional,
    summary: "<p>This lesson will show students how to make and use equivalent ratio tables to find a missing value.</p>",
    "properties": {
      "authorOrg": "",
      "authors": [
        "Angie Shindelar",
        "Robert Parkin"
      ],
      "claims": [
        {
          "code": "math-c1",
          "number": 1,
          "title": "Concepts and Procedures"
        }
      ],
      "grades": [
        {
          "code": "g6",
          "shortName": "6",
          "longName": "Grade 6"
        }
      ],
      "image": "https://s3-us-west-2.amazonaws.com/api-dev.dl.smarterbalanced.org/Images/200/image.png",
      "lastUpdatedDate": new Date("2020-01-01T12:00:01+00:00"),
      "standards": [
        {
          "code": "math-g6-rp3a",
          "title": "RP-3a",
          "description": "Make tables of equivalent ratios relating quantities with whole-number measurements, find missing values in the tables, and plot the pairs of values on the coordinate plane. Use tables to compare ratios."
        }
      ],
      "subject": {
        "code": "math",
        "shortName": "Math",
        "fullName": "Mathematics"
      },
      "targets": [
        {
          "code": "math-c1-g6-ta",
          "number": "A",
          "description": "Understand ratio concepts and use ratio reasoning to solve problems",
          "group": ""
        }
      ],
      "title": "Come to the Table"
    },

  },
  {
    "id": 126,
    "type": ResourceType.Instructional,
    summary: "<p>In this task, students will listen to a short nonfiction article about the moon landing. They will take notes on a provided document, and be able to summarize and identify the central idea of the text.</p>",
    "properties": {
      "authorOrg": "",
      "authors": [
        "Brendan Lynch"
      ],
      "claims": [
        {
          "code": "ela-c3",
          "number": 3,
          "title": "Speaking & Listening"
        }
      ],
      "grades": [
        {
          "code": "g5",
          "shortName": "5",
          "longName": "Grade 5"
        }
      ],
      "image": "https://s3-us-west-2.amazonaws.com/api-dev.dl.smarterbalanced.org/Images/126/Moon+-+Brendan+Lynch.png",
      "lastUpdatedDate": new Date("2020-01-01T12:00:01+00:00"),
      "standards": [
        {
          "code": "ela-g5-sl2",
          "title": "SL-2",
          "description": "Summarize a written text read aloud or information presented in diverse media and formats, including visually, quantitatively, and orally."
        }
      ],
      "subject": {
        "code": "ela",
        "shortName": "ELA",
        "fullName": "English Language Arts"
      },
      "targets": [
        {
          "code": "ela-c3-g5-t4",
          "number": "4",
          "description": "Listen and Interpret",
          "group": ""
        }
      ],
      "title": "To The Moon: Finding Central Idea"
    }
  }
];

export const initialSearchFilters: SearchFilters = {
  query: '',
  claims: [
    { code: 'ela-c2',   title: 'Writing' },
    { code: 'ela-c3',   title: 'Speaking & Listening' },
    { code: 'ela-c4',   title: 'Research/Inquiry' },
    { code: 'math-c1',  title: 'Concepts and Procedures' }
  ],
  grades: [
    { code: 'g3',   title: 'Grade 3' },
    { code: 'g4',   title: 'Grade 4' },
    { code: 'g5',   title: 'Grade 5' },
    { code: 'g6',   title: 'Grade 6' },
    { code: 'g7',   title: 'Grade 7' },
    { code: 'g8',   title: 'Grade 8' },
    { code: 'g9',   title: 'Grade 9' },
    { code: 'g10',  title: 'Grade 10' },
    { code: 'g11',  title: 'Grade 11' },
    { code: 'g12',  title: 'Grade 12' },
    { code: 'ghs',  title: 'High School' }
  ],
  resourceTypes: [
    { code: 'ir', title: 'Instructional' },
    { code: 'cp', title: 'Connections Playlist' },
    { code: 'pl', title: 'Professional Learning' },
    { code: 'as', title: 'Accessibility Strategy' },
    { code: 'fs', title: 'Formative Assessment Strategy' }
  ],
  standards: [
    { code: 'ela-g3-l3a',     title: 'L-3a' },
    { code: 'ela-g3-l6',      title: 'L-6' },
    { code: 'ela-g3-sl2',     title: 'SL-2' },
    { code: 'ela-g3-sl3',     title: 'SL-3' },
    { code: 'ela-g4-l3a',     title: 'L-3a' },
    { code: 'ela-g4-l6',      title: 'L-6' },
    { code: 'ela-g4-ri7',     title: 'RI-7' },
    { code: 'ela-g4-sl2',     title: 'SL-2' },
    { code: 'ela-g4-sl3',     title: 'SL-3' },
    { code: 'ela-g4-w2d',     title: 'W-2d' },
    { code: 'ela-g4-w3d',     title: 'W-3d' },
    { code: 'ela-g5-sl2',     title: 'SL-2' },
    { code: 'ela-g5-sl3',     title: 'SL-3' },
    { code: 'ela-g5-w2d',     title: 'W-2d' },
    { code: 'ela-g5-w3d',     title: 'W-3d' },
    { code: 'ela-g6-l1',      title: 'L-1' },
    { code: 'ela-g6-l2',      title: 'L-2' },
    { code: 'ela-g6-l3a',     title: 'L-3a' },
    { code: 'ela-g6-l3b',     title: 'L-3b' },
    { code: 'ela-g6-l6',      title: 'L-6' },
    { code: 'ela-g6-sl2',     title: 'SL-2' },
    { code: 'ela-g6-sl3',     title: 'SL-3' },
    { code: 'ela-g6-w2d',     title: 'W-2d' },
    { code: 'ela-g6-w3d',     title: 'W-3d' },
    { code: 'ela-g7-l1',      title: 'L-1' },
    { code: 'ela-g7-l2',      title: 'L-2' },
    { code: 'ela-g7-l3a',     title: 'L-3a' },
    { code: 'ela-g7-l6',      title: 'L-6' },
    { code: 'ela-g7-sl2',     title: 'SL-2' },
    { code: 'ela-g7-sl3',     title: 'SL-3' },
    { code: 'ela-g7-w2d',     title: 'W-2d' },
    { code: 'ela-g7-w3d',     title: 'W-3d' },
    { code: 'ela-g8-sl2',     title: 'SL-2' },
    { code: 'ela-g8-sl3',     title: 'SL-3' },
    { code: 'ela-ghs-l1',     title: 'L-1' },
    { code: 'ela-ghs-l2',     title: 'L-2' },
    { code: 'ela-ghs-l6',     title: 'L-6' },
    { code: 'ela-ghs-sl2',    title: 'SL-2' },
    { code: 'ela-ghs-sl3',    title: 'SL-3' },
    { code: 'ela-ghs-w2d',    title: 'W-2d' },
    { code: 'ela-ghs-w3d',    title: 'W-3d' },
    { code: 'ela-ghs-w8',     title: 'W-8' },
    { code: 'math-g3-g1',     title: 'G-1' },
    { code: 'math-g3-g2',     title: 'G-2' },
    { code: 'math-g3-nf1',    title: 'NF-1' },
    { code: 'math-g3-nf2',    title: 'NF-2' },
    { code: 'math-g3-nf2a',   title: 'NF-2a' },
    { code: 'math-g3-nf3',    title: 'NF-3' },
    { code: 'math-g3-nf3a',   title: 'NF-3a' },
    { code: 'math-g3-nf3c',   title: 'NF-3c' },
    { code: 'math-g3-nf3d',   title: 'NF-3d' },
    { code: 'math-g3-oa8',    title: 'OA-8' },
    { code: 'math-g3-oa9',    title: 'OA-9' },
    { code: 'math-g4-g1',     title: 'G-1' },
    { code: 'math-g4-g2',     title: 'G-2' },
    { code: 'math-g4-g3',     title: 'G-3' },
    { code: 'math-g4-nbt1',   title: 'NBT-1' },
    { code: 'math-g4-nbt2',   title: 'NBT-2' },
    { code: 'math-g4-nbt3',   title: 'NBT-3' },
    { code: 'math-g5-g1',     title: 'G-1' },
    { code: 'math-g5-g2',     title: 'G-2' },
    { code: 'math-g5-g3',     title: 'G-3' },
    { code: 'math-g5-g4',     title: 'G-4' },
    { code: 'math-g6-rp1',    title: 'RP-1' },
    { code: 'math-g6-rp2',    title: 'RP-2' },
    { code: 'math-g6-rp3',    title: 'RP-3' },
    { code: 'math-g6-sp1',    title: 'SP-1' },
    { code: 'math-g6-sp2',    title: 'SP-2' },
    { code: 'math-g6-sp3',    title: 'SP-3' },
    { code: 'math-g6-sp4',    title: 'SP-4' },
    { code: 'math-g6-sp5',    title: 'SP-5' },
    { code: 'math-g7-g3',     title: 'G-3' },
    { code: 'math-g7-ns1',    title: 'NS-1' },
    { code: 'math-g7-ns1b',   title: 'NS-1b' },
    { code: 'math-g7-ns1c',   title: 'NS-1c' },
    { code: 'math-g7-ns1d',   title: 'NS-1d' },
    { code: 'math-g7-ns2',    title: 'NS-2' },
    { code: 'math-g7-ns3',    title: 'NS-3' },
    { code: 'math-g8-ee8b',   title: 'EE-8b' },
    { code: 'math-g8-f1',     title: 'F-1' },
    { code: 'math-g8-f2',     title: 'F-2' },
    { code: 'math-g8-f3',     title: 'F-3' },
    { code: 'math-g8-f4',     title: 'F-4' },
    { code: 'math-g8-f5',     title: 'F-5' },
    { code: 'math-ghs-if1',   title: 'IF-1' },
    { code: 'math-ghs-if3',   title: 'IF-3' },
    { code: 'math-ghs-if4',   title: 'IF-4' },
    { code: 'math-ghs-if5',   title: 'IF-5' },
    { code: 'math-ghs-if6',   title: 'IF-6' },
    { code: 'math-ghs-rei4b', title: 'REI-4b' },
    { code: 'math-ghs-srt6',  title: 'SRT-6' },
    { code: 'math-ghs-srt7',  title: 'SRT-7' },
    { code: 'math-ghs-srt8',  title: 'SRT-8' }
  ],
  subjects: [
    { code: 'ela',  title: 'English Language Arts' },
    { code: 'math', title: 'Mathematics' },
  ],
  targets: [
    { code: 'ela-c2-g3-t8',   title: 'Language & Vocabulary Use' },
    { code: 'ela-c2-g4-t8',   title: 'Language & Vocabulary Use' },
    { code: 'ela-c2-g5-t8',   title: 'Language & Vocabulary Use' },
    { code: 'ela-c2-g6-t8',   title: 'Language & Vocabulary Use' },
    { code: 'ela-c2-g6-t9',   title: 'Editing' },
    { code: 'ela-c2-g7-t8',   title: 'Language & Vocabulary Use' },
    { code: 'ela-c2-g7-t9',   title: 'Editing' },
    { code: 'ela-c2-ghs-t8',  title: 'Language & Vocabulary Use' },
    { code: 'ela-c2-ghs-t9',  title: 'Editing' },
    { code: 'ela-c3-g3-t4',   title: 'Listen and Interpret' },
    { code: 'ela-c3-g4-t4',   title: 'Listen and Interpret' },
    { code: 'ela-c3-g5-t4',   title: 'Listen and Interpret' },
    { code: 'ela-c3-g6-t4',   title: 'Listen and Interpret' },
    { code: 'ela-c3-g7-t4',   title: 'Listen and Interpret' },
    { code: 'ela-c3-g8-t4',   title: 'Listen and Interpret' },
    { code: 'ela-c3-ghs-t4',  title: 'Listen and Interpret' },
    { code: 'ela-c4-g4-t2',   title: 'Interpret & Integrate Information' },
    { code: 'ela-c4-ghs-t3',  title: 'Evaluate Information / Sources' },
    { code: 'math-c1-g3-td',  title: 'Solve problems involving the four operations, and identify and explain patterns in arithmetic' },
    { code: 'math-c1-g3-tf',  title: 'Develop understanding of fractions as numbers' },
    { code: 'math-c1-g3-tk',  title: 'Reason with shapes and their attributes' },
    { code: 'math-c1-g4-td',  title: 'Generalize place value understanding for multi-digit whole numbers' },
    { code: 'math-c1-g4-tl',  title: 'Draw and identify lines and angles, and classify shapes by properties of their lines and angles' },
    { code: 'math-c1-g5-tj',  title: 'Graph points on the coordinate plane to solve real-world and mathmatical problems' },
    { code: 'math-c1-g5-tk',  title: 'Classify two-dimensional figures into categories based on their properties' },
    { code: 'math-c1-g6-ta',  title: 'Understand ratio concepts and use ratio reasoning to solve problems' },
    { code: 'math-c1-g6-ti',  title: 'Develop an understanding of statistics variability' },
    { code: 'math-c1-g6-tj',  title: 'Summarize and describe distributions' },
    { code: 'math-c1-g7-tb',  title: 'Apply and extend previous understandings of operations with fractions to add, subtract, multiply, and divide rational numbers' },
    { code: 'math-c1-g7-te',  title: 'Draw, construct, and describe geometrical figures and describe the relationships behind them' },
    { code: 'math-c1-g8-td',  title: 'Analyze and solve linear equations and pairs of simultaneous linear equations' },
    { code: 'math-c1-g8-te',  title: 'Define, evaluate, and compare functions' },
    { code: 'math-c1-g8-tf',  title: 'Use functions to model relationships between quantities' },
    { code: 'math-c1-ghs-ti', title: 'Solve equations and inequalities in one variable' },
    { code: 'math-c1-ghs-tk', title: 'Understand the concept of a function and use function notation' },
    { code: 'math-c1-ghs-tl', title: 'Interpret functions that arise in applications in terms of the context' },
    { code: 'math-c1-ghs-to', title: 'Define trigonometric ratios and solve problems involving right triangles' }
  ]
};

export const mockSearchFilters: SearchFilters = {
  query: '',
  resourceTypes: [
    { title: 'Instructional', code: 'ir' },
    { title: 'Professional Learning', code: 'pl' },
    { title: 'Connections Playlist', code: 'cp' },
    { title: 'Formative Assessment Strategy', code: 'fas' },
    { title: 'Accessibility Strategy', code: 'ac' }
  ],
  grades: [
    { title: 'Kindergarten', code: 'k' },
    { title: '1', code: '1' },
    { title: '2', code: '2' },
    { title: '3', code: '3' },
    { title: '4', code: '4' },
    { title: '5', code: '5' },
    { title: '6', code: '6' },
    { title: '7', code: '7' },
    { title: '8', code: '8' },
    { title: 'High School', code: 'hs' }
  ],
  subjects: [
    { title: 'Mathematics', code: 'math' },
    { title: 'English Language Arts', code: 'ela' }
  ],
  claims: [
    { title: 'Reading', code: 'ela-c1' },
    { title: 'Writing', code: 'ela-c2' },
    { title: 'Speaking & Listening', code: 'ela-c3' },
    { title: 'Research / Inquiry', code: 'ela-c4' },
  ],
  targets: [
    { title: 'Sample Target A', code: 'sample-target-a' },
    { title: 'Sample Target B', code: 'sample-target-b' }
  ],
  standards: [
    { title: 'Sample Standard A', code: 'sample-standard-a' },
    { title: 'Sample Standard B', code: 'sample-standard-b' }
  ],
};

export const teaserIRContent: InstructionalResource = {
  "id": 200,
  "type": ResourceType.Instructional,
  "teaser": false,
  "properties": {
    "authorOrg": "",
    "authors": [
      "Angie Shindelar",
      "Robert Parkin"
    ],
    "claims": [
      {
        "code": "math-c1",
        "number": 1,
        "title": "Concepts and Procedures"
      }
    ],
    "grades": [
      {
        "code": "g6",
        "shortName": "6",
        "longName": "Grade 6"
      }
    ],
    "image": "https://s3-us-west-2.amazonaws.com/api-dev.dl.smarterbalanced.org/Images/200/image.png",
    "lastUpdatedDate": new Date("2020-01-01T12:00:01.000Z"),
    "standards": [
      {
        "code": "math-g6-rp3a",
        "title": "RP-3a",
        "description": "Make tables of equivalent ratios relating quantities with whole-number measurements, find missing values in the tables, and plot the pairs of values on the coordinate plane. Use tables to compare ratios."
      }
    ],
    "subject": {
      "code": "math",
      "shortName": "Math",
      "fullName": "Mathematics"
    },
    "targets": [
      {
        "code": "math-c1-g6-ta",
        "number": "A",
        "description": "Understand ratio concepts and use ratio reasoning to solve problems",
        "group": ""
      }
    ],
    "title": "Come to the Table"
  },
  "attachments": [
    {
      "category": "Supplemental Material",
      "fileType": 6,
      "fileExtension": "docx",
      "name": "Tools",
      "uri": "https://s3-us-west-2.amazonaws.com/api-dev.dl.smarterbalanced.org/Attachments/200/Tools.docx",
      "mimeType": "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    },
    {
      "category": "Handout",
      "fileType": 6,
      "fileExtension": "docx",
      "name": "Solve and Discuss",
      "uri": "https://s3-us-west-2.amazonaws.com/api-dev.dl.smarterbalanced.org/Attachments/200/Solve+and+Discuss+.docx",
      "mimeType": "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    },
    {
      "category": "Handout",
      "fileType": 6,
      "fileExtension": "docx",
      "name": "Instructional Worksheet",
      "uri": "https://s3-us-west-2.amazonaws.com/api-dev.dl.smarterbalanced.org/Attachments/200/Instructional+Worksheet.docx",
      "mimeType": "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    },
    {
      "category": "Handout",
      "fileType": 6,
      "fileExtension": "docx",
      "name": "Independent Practice",
      "uri": "https://s3-us-west-2.amazonaws.com/api-dev.dl.smarterbalanced.org/Attachments/200/Independent+Practice.docx",
      "mimeType": "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    },
    {
      "category": "Handout",
      "fileType": 6,
      "fileExtension": "docx",
      "name": "Entrance Ticket",
      "uri": "https://s3-us-west-2.amazonaws.com/api-dev.dl.smarterbalanced.org/Attachments/200/Entrance+Ticket.docx",
      "mimeType": "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    },
    {
      "category": "Handout",
      "fileType": 4,
      "fileExtension": "pdf",
      "name": "Entrance Ticket Images Printout",
      "uri": "https://s3-us-west-2.amazonaws.com/api-dev.dl.smarterbalanced.org/Attachments/200/Entrance+Ticket+Images+Printout.pdf",
      "mimeType": "application/pdf"
    }
  ],
  "getStarted": {
    "overview": "<p>This lesson will show students how to make and use equivalent ratio tables to find a missing value.</p>",
    "learningGoal": "<ul>\r\n<li>Students will know how to create an equivalent ratio table.</li>\r\n<li>Students will use an equivalent ratio table to find a missing value.</li>\r\n</ul>",
    "successCriteria": "<ul>\r\n<li>I can create a ratio table.</li>\r\n<li>I can find a missing value in a ratio table.</li>\r\n</ul>"
  },
  "stepByStep": [
    {
      "orderingIndex": 1,
      "title": "Lesson Preparation",
      "content": "<ul>\r\n<li>Download and copy the <sbdl-tooltip title=\"Formative Assessment Strategy\"\n              class=\"strategy-link\"\n              text=\"<p>This strategy is used to start the class with a short activity that gets students thinking about content. Entrance tickets should be within your students&rsquo; skill range and are often just a few short questions that can be completed in fewer than 5 minutes.</p>\"\n              readMoreUrl=\"/resource/18\"\n              style=\"white-space:nowrap;\"\n  ><sbdl-icon icon=\"strategies\"></sbdl-icon>\n  <span class=\"gradient-hover\">Entrance Ticket</span\n></sbdl-tooltip>, Solve and Discuss worksheet, Instructional Worksheet, and the Independent Practice worksheet.</li>\r\n<li>Download the <sbdl-tooltip title=\"Formative Assessment Strategy\"\n              class=\"strategy-link\"\n              text=\"<p>This strategy is used to start the class with a short activity that gets students thinking about content. Entrance tickets should be within your students&rsquo; skill range and are often just a few short questions that can be completed in fewer than 5 minutes.</p>\"\n              readMoreUrl=\"/resource/18\"\n              style=\"white-space:nowrap;\"\n  ><sbdl-icon icon=\"strategies\"></sbdl-icon>\n  <span class=\"gradient-hover\">Entrance Ticket</span\n></sbdl-tooltip> images for the warm-up activity to project in front of the class, or print out for groups of students to use.</li>\r\n<li>Gather <sbdl-tooltip title=\"Accessibility Strategy\"\n              class=\"strategy-link\"\n              text=\"<p>Scratch paper to make notes, write computations, or record responses may be made available to students.</p>\"\n              readMoreUrl=\"/resource/64\"\n              style=\"white-space:nowrap;\"\n  ><i class=\"far fa-universal-access\"></i>\n  <span class=\"gradient-hover\">Scratch Paper</span\n></sbdl-tooltip> (preferably grid paper) and Highlighters for students to use.</li>\r\n</ul>"
    },
    {
      "orderingIndex": 2,
      "title": "Entrance Ticket",
      "content": "<p>The purpose of the <sbdl-tooltip title=\"Formative Assessment Strategy\"\n              class=\"strategy-link\"\n              text=\"<p>This strategy is used to start the class with a short activity that gets students thinking about content. Entrance tickets should be within your students&rsquo; skill range and are often just a few short questions that can be completed in fewer than 5 minutes.</p>\"\n              readMoreUrl=\"/resource/18\"\n              style=\"white-space:nowrap;\"\n  ><sbdl-icon icon=\"strategies\"></sbdl-icon>\n  <span class=\"gradient-hover\">Entrance Ticket</span\n></sbdl-tooltip> activity is to review concepts and vocabulary relating to ratios that should have been taught prior to this lesson.</p>\r\n<ul>\r\n<li>Hand out the <sbdl-tooltip title=\"Formative Assessment Strategy\"\n              class=\"strategy-link\"\n              text=\"<p>This strategy is used to start the class with a short activity that gets students thinking about content. Entrance tickets should be within your students&rsquo; skill range and are often just a few short questions that can be completed in fewer than 5 minutes.</p>\"\n              readMoreUrl=\"/resource/18\"\n              style=\"white-space:nowrap;\"\n  ><sbdl-icon icon=\"strategies\"></sbdl-icon>\n  <span class=\"gradient-hover\">Entrance Ticket</span\n></sbdl-tooltip> to students and then project the first image in front of the class (or handout the first image to student groups).</li>\r\n<li>Have the students answer the questions for Part A; then use <sbdl-tooltip title=\"Formative Assessment Strategy\"\n              class=\"strategy-link\"\n              text=\"<p>This strategy utilizes students as teachers to clarify learning. In pairs, the first student teaches or summarizes the content for their partner. The second student provides feedback on the quality and clarity of the information presented from the first student.</p>\"\n              readMoreUrl=\"/resource/51\"\n              style=\"white-space:nowrap;\"\n  ><sbdl-icon icon=\"strategies\"></sbdl-icon>\n  <span class=\"gradient-hover\">Peer-to-Peer Feedback</span\n></sbdl-tooltip> to discuss their answers with a partner/group (1&ndash;2 minutes).</li>\r\n<li>Project the second image in front of the class (or handout the second image to student groups).</li>\r\n<li>Have the students answer the questions for Part B; then use <sbdl-tooltip title=\"Formative Assessment Strategy\"\n              class=\"strategy-link\"\n              text=\"<p>This strategy utilizes students as teachers to clarify learning. In pairs, the first student teaches or summarizes the content for their partner. The second student provides feedback on the quality and clarity of the information presented from the first student.</p>\"\n              readMoreUrl=\"/resource/51\"\n              style=\"white-space:nowrap;\"\n  ><sbdl-icon icon=\"strategies\"></sbdl-icon>\n  <span class=\"gradient-hover\">Peer-to-Peer Feedback</span\n></sbdl-tooltip> to discuss their answers with a partner/group (1&ndash;2 minutes).</li>\r\n<li>Have the students answer the bonus question; then use <sbdl-tooltip title=\"Formative Assessment Strategy\"\n              class=\"strategy-link\"\n              text=\"<p>This strategy utilizes students as teachers to clarify learning. In pairs, the first student teaches or summarizes the content for their partner. The second student provides feedback on the quality and clarity of the information presented from the first student.</p>\"\n              readMoreUrl=\"/resource/51\"\n              style=\"white-space:nowrap;\"\n  ><sbdl-icon icon=\"strategies\"></sbdl-icon>\n  <span class=\"gradient-hover\">Peer-to-Peer Feedback</span\n></sbdl-tooltip> to discuss their answers with a partner/group (1&ndash;2 minutes).</li>\r\n<li>The teacher may have students share out responses to the whole class.</li>\r\n</ul>"
    },
    {
      "orderingIndex": 3,
      "title": "Activity 1: Solve & Discuss",
      "content": "<p>The purpose of this activity is to explore the concept to be taught and for students to explore different ways to solve a proportion with a missing value.</p>\r\n<ul>\r\n<li>Hand out the Solve and Discuss worksheet to the students. Have a student read the problem aloud. Give the students 5&ndash;10 minutes to solve the missing value ratio problem in any way they can.</li>\r\n<li>The teacher should walk around and observe the various ways in which students are solving the problem and note which students are struggling as well as those who are solving it using equivalent ratios, or even a table of equivalent ratios.</li>\r\n<li>After most students have finished and/or attempted the problem, the teacher will select students to share their methods used to solve the problem.</li>\r\n</ul>"
    },
    {
      "orderingIndex": 4,
      "title": "Model Time!",
      "content": "<p>The teacher will model (I Do) how to create and use a ratio table to find a missing value. This can be 1 or 2 of the problems on the Instructional Worksheet.</p>\r\n<ul>\r\n<li>Hand out the &ldquo;Instructional Worksheet&rdquo; to the students. Clarify intended learning by explaining that by using equivalent ratios, students can determine the cost of multiples of the same items at a store (i.e., if 3 candy bars cost $4.50, what would the cost be for 6 candy bars? 5? etc.) or how to change a recipe to cook for more or less people than the original recipe calls for (i.e., if 1 cup of chocolate chips makes 24 cookies, how many cups are needed for 12? 36?) and that creating a ratio table can help them find these values.</li>\r\n<li>The teacher will walk the students through problem 1, showing how to create a two-column table to represent the ratio in the problem and how to take the information from the problem and place it in the table, using one colored <sbdl-tooltip title=\"Accessibility Strategy\"\n              class=\"strategy-link\"\n              text=\"<p>A digital tool for marking desired text, item questions, item answers, or parts of these with a color.</p>\"\n              readMoreUrl=\"/resource/59\"\n              style=\"white-space:nowrap;\"\n  ><i class=\"far fa-universal-access\"></i>\n  <span class=\"gradient-hover\">Highlighter</span\n></sbdl-tooltip> to highlight the title and values to be placed in column one, and another colored <sbdl-tooltip title=\"Accessibility Strategy\"\n              class=\"strategy-link\"\n              text=\"<p>A digital tool for marking desired text, item questions, item answers, or parts of these with a color.</p>\"\n              readMoreUrl=\"/resource/59\"\n              style=\"white-space:nowrap;\"\n  ><i class=\"far fa-universal-access\"></i>\n  <span class=\"gradient-hover\">Highlighter</span\n></sbdl-tooltip> to highlight the title and values to be placed in column two. Once the table is created, the teacher will then show how to find the missing value by using addition patterns or multiplication.</li>\r\n<li>After completing problem 1, the teacher will ask the students to use Fist-to-Five to represent their confidence in creating a ratio table. Then use another Fist-to-Five to represent their confidence in finding a missing value within that table. Depending upon student responses, the teacher can choose to model problem 2.</li>\r\n</ul>"
    },
    {
      "orderingIndex": 5,
      "title": "Guiding Time!",
      "content": "<p>During this part of the lesson, the teacher will have the students work through 1 or 2 problems from the Instructional Worksheet together as a class.</p>\r\n<ul>\r\n<li>Have a student read the problem aloud.</li>\r\n<li>Tell the students to create a ratio table with the given information.</li>\r\n<li>Have the students turn to a partner and perform a <sbdl-tooltip title=\"Formative Assessment Strategy\"\n              class=\"strategy-link\"\n              text=\"<p>Students take a few minutes to think about a question or prompt individually. Then, they pair with a designated partner to compare thoughts before sharing with the whole class.</p>\"\n              readMoreUrl=\"/resource/43\"\n              style=\"white-space:nowrap;\"\n  ><sbdl-icon icon=\"strategies\"></sbdl-icon>\n  <span class=\"gradient-hover\">Think-Pair-Share </span\n></sbdl-tooltip>, discussing how and why they created their tables. Through listening and observation, the teacher can determine which students may need further instruction on this concept.</li>\r\n<li>After calling on students to share their tables, the teacher will show a correctly formatted table and show what value is missing. *It is important to note that there are several ways to format the table that lead to a way to correctly find the missing value and that multiple formats can be shown.</li>\r\n<li>A Calculator can be provided to students who are struggling with multiplication/division facts, so that they can still demonstrate knowledge of the process.</li>\r\n<li>The students will then be instructed to find the missing value in the table independently. After a given amount of time (3&ndash;5 minutes), the students will perform a <sbdl-tooltip title=\"Formative Assessment Strategy\"\n              class=\"strategy-link\"\n              text=\"<p>Students take a few minutes to think about a question or prompt individually. Then, they pair with a designated partner to compare thoughts before sharing with the whole class.</p>\"\n              readMoreUrl=\"/resource/43\"\n              style=\"white-space:nowrap;\"\n  ><sbdl-icon icon=\"strategies\"></sbdl-icon>\n  <span class=\"gradient-hover\">Think-Pair-Share </span\n></sbdl-tooltip> to discuss their results and method for finding the missing value. Through listening and observation, the teacher can determine which students may need further instruction on this concept.</li>\r\n<li>The teacher will then call on students to share their answers/methods with the class.</li>\r\n<li>The teacher can use evidence from observation and listening to student discussions and/or another Fist-to-Five to determine whether another problem should be done as a class or to move on to independent practice. The evidence will also be used to determine which students will complete which problems on the Independent Practice worksheet.</li>\r\n</ul>"
    },
    {
      "orderingIndex": 6,
      "title": "Independent Time!",
      "content": "<p>During this time, the teacher will assign each student specific problems from the Independent Practice worksheet based upon their performance level and understanding of the modeled problems and guided practice: problems 1&ndash;4 for below standard, problems 5&ndash;8 for at standard, and problems 9&ndash;11 for above standard. At any time, through observation, the teacher can assign a different set of problems from the worksheet to a student who demonstrates the ability, or inability, to successfully complete the set initially assigned.</p>"
    }
  ],
  "accessibilityStrategies": [
    {
      "id": 59,
      "type": ResourceType.AccessibilityStrategy,
      "title": "Highlighter",
      "description": "<p>A digital tool for marking desired text, item questions, item answers, or parts of these with a color.</p>"
    },
    {
      "id": 64,
      "type": ResourceType.AccessibilityStrategy,
      "title": "Scratch Paper",
      "description": "<p>Scratch paper to make notes, write computations, or record responses may be made available to students.</p>"
    }
  ],
  "formativeAssessmentStrategies": [
    {
      "id": 43,
      "type": ResourceType.FormativeStrategy,
      "title": "Think-Pair-Share ",
      "description": "<p>Students take a few minutes to think about a question or prompt individually. Then, they pair with a designated partner to compare thoughts before sharing with the whole class.</p>"
    },
    {
      "id": 21,
      "type": ResourceType.FormativeStrategy,
      "title": "Fist to Five ",
      "description": "<p>Teachers ask students to show anywhere from zero to five fingers to signal their level of understanding. This is a quick strategy for teachers and students to evaluate their current level of understanding.</p>"
    },
    {
      "id": 51,
      "type": ResourceType.FormativeStrategy,
      "title": "Peer-to-Peer Feedback",
      "description": "<p>This strategy utilizes students as teachers to clarify learning. In pairs, the first student teaches or summarizes the content for their partner. The second student provides feedback on the quality and clarity of the information presented from the first student.</p>"
    },
    {
      "id": 18,
      "type": ResourceType.FormativeStrategy,
      "title": "Entrance Ticket",
      "description": "<p>This strategy is used to start the class with a short activity that gets students thinking about content. Entrance tickets should be within your students&rsquo; skill range and are often just a few short questions that can be completed in fewer than 5 minutes.</p>"
    }
  ],
  "thingsToConsider": "<ul>\r\n<li>Keep in mind that ratio tables are ways to record one&rsquo;s thought processes and that there are several ways to solve these problems.</li>\r\n<li>Many students will have used in the past (and may attempt to use) skip-counting to find the missing values in a table and may become frustrated if this is not feasible with the values given.</li>\r\n<li>If an addition pattern is not apparent with the table, students can use multiplication and/or division patterns to solve or possibly create an addition pattern by inserting missing rows.</li>\r\n</ul>",
  "differentiation": "",
  "formativeAssessHowTo": {
    "clarify": "<ul>\r\n<li>Make it relevant: Before modeling the lesson, the teacher will talk about how the students will be able to use ratio tables to determine the cost of multiples of the same items given the cost of a given number of the same items. For example: <em>If 3 candy bars cost $4.50, then how much would 6 cost? 5 candy bars? etc. They can also use ratio tables to modify recipes: If 1 cup of chocolate chips can make 24 cookies, then how many chocolate chips would be needed to make 36 cookies? 12 cookies</em>? Also, some of the questions in the independent practice will be relevant to the students as well.</li>\r\n<li>Ask clarifying questions: The teacher may want to ask the students whether they have seen tables in Math before and whether they know the terms &ldquo;columns&rdquo; and &ldquo;rows&rdquo; and can they identify them.</li>\r\n<li>Explain the importance: This lesson builds upon the knowledge and vocabulary of ratios and unit rates from 6th grade, as well as analyzing patterns in 5th grade. This lesson will also prepare students for creating function tables in 8th grade as well as eventually graphing those functions.</li>\r\n</ul>",
    "elicit": "<ul>\r\n<li>The teacher will be eliciting evidence by observation and listening to student discussions throughout the lesson. In the <sbdl-tooltip title=\"Formative Assessment Strategy\"\n              class=\"strategy-link\"\n              text=\"<p>This strategy is used to start the class with a short activity that gets students thinking about content. Entrance tickets should be within your students&rsquo; skill range and are often just a few short questions that can be completed in fewer than 5 minutes.</p>\"\n              readMoreUrl=\"/resource/18\"\n              style=\"white-space:nowrap;\"\n  ><sbdl-icon icon=\"strategies\"></sbdl-icon>\n  <span class=\"gradient-hover\">Entrance Ticket</span\n></sbdl-tooltip> activity, the teacher will gather knowledge of students&rsquo; understanding of previous lessons on ratios and use of relevant vocabulary for this lesson. During the solve and discuss activity, the teacher will observe students&rsquo; work on solving an equivalent ratio problem and see where their knowledge is as it pertains to the lesson to be taught. Also, during the guided practice, <sbdl-tooltip title=\"Formative Assessment Strategy\"\n              class=\"strategy-link\"\n              text=\"<p>Students take a few minutes to think about a question or prompt individually. Then, they pair with a designated partner to compare thoughts before sharing with the whole class.</p>\"\n              readMoreUrl=\"/resource/43\"\n              style=\"white-space:nowrap;\"\n  ><sbdl-icon icon=\"strategies\"></sbdl-icon>\n  <span class=\"gradient-hover\">Think-Pair-Share </span\n></sbdl-tooltip> discussions will allow the teacher to gather evidence on whether the lesson is to proceed and/or how to categorize students as at, above, or below standard.</li>\r\n<li>Fist-to-Five check-ins are used to determine whether the lesson should be moved from modeling to guided practice as well as from guided practice to independent practice.</li>\r\n<li>During independent practice, the teacher will have an opportunity to observe students&rsquo; work individually as they complete their assigned problems.</li>\r\n</ul>",
    "interpret": "<ul>\r\n<li>When determining whether students are understanding the concept of creating a ratio table, the teacher will be looking for the correct use of vocabulary: &ldquo;I placed the number of <u>________ </u>in column 1 of my table&rdquo; and &ldquo;I placed the number of <u>________ </u>in column 2 of my table,' as well as &ldquo;These values are in the same row, because&hellip;&rdquo; This can be supported by providing the sentence frames from the &ldquo;Tools&rdquo; document. Otherwise, direct observation of their tables will determine whether the values are in the correct columns and rows.</li>\r\n<li>When determining whether students understand how to use the table to find the missing values, the teacher should be looking/listening for the use of patterns in addition or multiplication/division. For example, &ldquo;When you add 5 to column 1, you add 75 to column 2&rdquo; or &ldquo;You multiply the 10 in column 1 by 2 to get 20, so you can multiply the 150 in column 2 by 2 to get the missing value, 300.&rdquo; This can be supported by providing the sentence frames from the &ldquo;Tools&rdquo; document. A common mistake/frustration is that not all tables will have addition patterns as the rows progress, so students will have to find multiplication/division patterns among some of the rows given, or even find a unit rate to establish the multiplication/division pattern.</li>\r\n</ul>",
    "act": "<ul>\r\n<li>If a student is struggling with setting up the table, revisit the vocabulary of columns and rows. It may also be necessary to revisit the highlighting of the values in the problem to show whether they belong in column 1 or column 2.</li>\r\n<li>If a student continues to look for addition patterns when there aren&rsquo;t any, the teacher can help the student identify where the multiplication patterns are located within a column by asking &ldquo;which value in column 1 is a multiple or factor of the value in column 1 that is missing its corresponding value in column 2.&rdquo;</li>\r\n<li>In more difficult problems, it may be necessary to prompt students to look at the rows in a table and see whether they can determine the unit rate to help find the missing value: &ldquo;Which row has two values where column 2&rsquo;s value can be evenly divided by column 1&rsquo;s value?&rdquo;</li>\r\n</ul>\r\n<h4>Feedback</h4>\r\n<ul>\r\n<li>Students will be giving each other feedback during the <sbdl-tooltip title=\"Formative Assessment Strategy\"\n              class=\"strategy-link\"\n              text=\"<p>This strategy is used to start the class with a short activity that gets students thinking about content. Entrance tickets should be within your students&rsquo; skill range and are often just a few short questions that can be completed in fewer than 5 minutes.</p>\"\n              readMoreUrl=\"/resource/18\"\n              style=\"white-space:nowrap;\"\n  ><sbdl-icon icon=\"strategies\"></sbdl-icon>\n  <span class=\"gradient-hover\">Entrance Ticket</span\n></sbdl-tooltip> activity as well as during the guided practice.</li>\r\n<li>Teachers will be giving feedback as they walk around, observe, and listen during the <sbdl-tooltip title=\"Formative Assessment Strategy\"\n              class=\"strategy-link\"\n              text=\"<p>This strategy is used to start the class with a short activity that gets students thinking about content. Entrance tickets should be within your students&rsquo; skill range and are often just a few short questions that can be completed in fewer than 5 minutes.</p>\"\n              readMoreUrl=\"/resource/18\"\n              style=\"white-space:nowrap;\"\n  ><sbdl-icon icon=\"strategies\"></sbdl-icon>\n  <span class=\"gradient-hover\">Entrance Ticket</span\n></sbdl-tooltip> and guided practice, as well as when they are observing students completing the solve and discuss worksheet and independent practice.</li>\r\n</ul>\r\n<h4>Instructional Moves</h4>\r\n<ul>\r\n<li>As the teacher elicits evidence from the various stages of the lesson, they will be determining if more prior knowledge needs to be given after the <sbdl-tooltip title=\"Formative Assessment Strategy\"\n              class=\"strategy-link\"\n              text=\"<p>This strategy is used to start the class with a short activity that gets students thinking about content. Entrance tickets should be within your students&rsquo; skill range and are often just a few short questions that can be completed in fewer than 5 minutes.</p>\"\n              readMoreUrl=\"/resource/18\"\n              style=\"white-space:nowrap;\"\n  ><sbdl-icon icon=\"strategies\"></sbdl-icon>\n  <span class=\"gradient-hover\">Entrance Ticket</span\n></sbdl-tooltip>, if the students need more than one problem modeled before moving on to guided practice, or if more than one guided practice problem is needed before moving on to independent practice.</li>\r\n<li>After at, above, and below groups of students are assigned their respective problems, the teacher will observe their progress/accuracy to determine whether they need to be assigned a different part of the worksheet.</li>\r\n</ul>"
  },
  /*
  "listConnectionsPlaylists": [
    {
      "id": 229,
      "title": "Ratios and Proportional Relationships",
      "count": 4,
      "image": "https://s3-us-west-2.amazonaws.com/api-dev.dl.smarterbalanced.org/Images/svg/Math_6-7_Ratio-and-Proportional-Relationships.svg"
    }
  ]
  */
};

export const teaserFAContent: FormativeStrategyResource = {
  "id": 23,
  "type": ResourceType.FormativeStrategy,
  "teaser": false,
  "properties": {
    "authorOrg": "Smarter Balanced",
    "authors": [],
    "claims": [],
    "grades": [],
    "image": "https://s3-us-west-2.amazonaws.com/api-dev.dl.smarterbalanced.org/Images/23/Gallery+Walk_+-+Serene+Cook.png",
    "lastUpdatedDate": new Date("2020-01-01T12:00:00.000Z"),
    "standards": [],
    "subject": {
      "code": null,
      "shortName": null,
      "fullName": null
    },
    "targets": [],
    "title": "Gallery Walk"
  },
  "overview": {
    "overview": "<p>This discussion technique allows students to be actively engaged as they walk through the classroom. They share ideas and respond to meaningful questions, documents, images, problem-solving situations, or texts individually or in small groups.</p>",
    "studentBenefits": "<p>Using this tool can help students:</p>\r\n<ul>\r\n<li>analyze information.</li>\r\n<li>reflect on learning.</li>\r\n<li>actively listen.</li>\r\n<li>provide peer feedback.</li>\r\n<li>practice using oral and written language.</li>\r\n<li>observe a new way to solve a problem.</li>\r\n<li>create questions.</li>\r\n</ul>",
    "suggestedMaterials": "<ul>\r\n<li>Content (e.g., objects, pictures, or student work)</li>\r\n<li>Chart paper</li>\r\n<li>Handouts with discussion question(s) or prompts (if needed)</li>\r\n<li>Notebooks</li>\r\n<li>Writing utensil</li>\r\n<li>Sticky Notes</li>\r\n</ul>"
  },
  "attachments": [
    {
      "category": "Sample",
      "fileType": 6,
      "fileExtension": "docx",
      "name": "Gallery Walk Sample",
      "uri": "https://s3-us-west-2.amazonaws.com/api-dev.dl.smarterbalanced.org/Attachments/23/Gallery+Walk_Sample+-+Serene+Cook.docx",
      "mimeType": "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    }
  ],
  "stepByStep": "<ol>\r\n<li>Discuss the learning goal and success criteria with the class and explain how this activity aligns with them.</li>\r\n<li>Prepare items for discussion (e.g., posters, artwork, or student work). Post the items around the room in easily accessible spaces.</li>\r\n<li>Assign students to groups and assign each group to an item.</li>\r\n<li>Give the groups time (time varies depending on task complexity) at each station to complete the task or respond to the item with their thoughts, questions, etc. Students can write on the item itself or on post-it notes.</li>\r\n<li>Have the groups rotate to the next item and respond to the item itself or the comments/questions left by the previous group.</li>\r\n<li>Have the groups rotate until they have been to a predetermined number of stations.</li>\r\n<li>Facilitate a classroom discussion to summarize the key takeaways/findings.</li>\r\n</ol>",
  "thingsToConsider": "<ul>\r\n<li>It is recommended to form groups of no more than six students.</li>\r\n<li>Have a prompt or guiding questions at each station for students to discuss or act upon. Prepare the questions in advance so that the students have sufficient time to discuss as they move through the room.</li>\r\n<li>Students can take notes or gather data in their notebooks as they move through the stations.</li>\r\n</ul>",
  "strategyInAction": {
    "clarify": "<p>The teacher discusses the learning goal and success criteria with the class and explains how this activity aligns with them.</p>",
    "elicit": "<p>Students&rsquo; knowledge and thoughts are elicited as they respond to the item and/or their peers&rsquo; comments/questions.</p>",
    "interpret": "<p>The teacher and students interpret the students&rsquo; knowledge of and thoughts about the items as they move through the stations.</p>",
    "act": "<p>Students can act on their peers&rsquo; comments/questions through written responses. The teacher should act accordingly as they interprets the questions, comments, and discussions at each station. For example, the teacher could ask a group a leading question to help them get to the next level of understanding.</p>"
  }
}

export const teaserASContent: AccessibilityStrategyResource = {
  "id": 68,
  "type": ResourceType.AccessibilityStrategy,
  "teaser": false,
  "properties": {
    "authorOrg": "Smarter Balanced",
    "authors": [],
    "claims": [],
    "grades": [],
    "image": "https://s3-us-west-2.amazonaws.com/api-dev.dl.smarterbalanced.org/Images/68/Writing+Tools+-+Serene+Cook.png",
    "lastUpdatedDate": new Date("2020-01-01T12:00:00.000Z"),
    "standards": [],
    "subject": {
      "code": "ut",
      "shortName": "UT",
      "fullName": "Universal Tool"
    },
    "targets": [],
    "title": "Writing Tools"
  },
  "overview": {
    "overview": "<p>Select writing tools (i.e., bold, italic, bullets, undo/redo) are available for all student-generated responses.</p>",
    "studentBenefits": "<ul>\r\n<li>Using this tool can help students:\r\n<ul>\r\n<li>Compose a written response or essay</li>\r\n<li>Edit writing</li>\r\n<li>Format writing</li>\r\n<li>Revise writing</li>\r\n<li>Proofread documents</li>\r\n<li>Improve understanding of various writing conventions</li>\r\n</ul>\r\n</li>\r\n</ul>",
    "suggestedMaterials": "<ul>\r\n<li>Electronic word processing tools and apps</li>\r\n<li>Assistive technology</li>\r\n</ul>"
  },
  "instructionalUse": "<ul>\r\n<li>Students use digital word processing tools in order to correctly format a typewritten story or article.</li>\r\n<li>Students can improve their ability to use italics and bullets correctly.</li>\r\n<li>Students understand formatting on an electronic document.</li>\r\n</ul>",
  "attachments": [],
  "thingsToConsider": "<ul>\r\n<li>Model specific tools with students:\r\n<ul>\r\n<li>Bold</li>\r\n<li>Italic</li>\r\n<li>Underline</li>\r\n<li>Remove format</li>\r\n<li>Numbered list</li>\r\n<li>Bullets</li>\r\n<li>Outdent</li>\r\n<li>Indent</li>\r\n<li>Cut</li>\r\n<li>Copy</li>\r\n<li>Paste</li>\r\n<li>Undo</li>\r\n<li>Redo</li>\r\n<li>Spell check</li>\r\n<li>Language (English)</li>\r\n<li>Insert special character</li>\r\n</ul>\r\n</li>\r\n<li>Provide opportunities for students to practice writing on an electronic word processing program.</li>\r\n<li>Provide multiple opportunities for students to format and revise a typed document as needed.</li>\r\n</ul>",
  "sampleItemContent": {
    "overview": "<p>Select writing tools (i.e., bold, italic, bullets, undo/redo) are available for all student-generated responses.</p>",
    "linkToSample": "https://sampleitems.smarterbalanced.org/BrowseItems",
    "description": "<p>To access the tool, first navigate to any sample item that has <em>Writing Extended </em>listed as the Item Type. Click on the two arrows to expand the passage. The Writing Tools are available in the text box of the response area.</p>"
  }
};

export const teaserPLContent: ProfessionalLearningResource = {
  "id": 247,
  "type": ResourceType.ProfessionalLearning,
  "teaser": false,
  "properties": {
    "authorOrg": "Smarter Balanced",
    "authors": [],
    "claims": [],
    "grades": [],
    "image": "https://s3-us-west-2.amazonaws.com/api-dev.dl.smarterbalanced.org/Images/247/247.jpg",
    "lastUpdatedDate": new Date("2020-01-01T12:00:01.000Z"),
    "standards": [],
    "subject": {
      "code": null,
      "shortName": null,
      "fullName": null
    },
    "targets": [],
    "title": "IAB Use 4: Using IABS as a Tool to Support Student Mastery"
  },
  "overview": {
    "overview": "<p>This professional learning resource series is designed to introduce participants to the different uses for Smarter Balanced Interim Assessment Blocks (IABs). These PLC resources are designed to provide educators with a more detailed understanding of student learning throughout the year. IABs are intended to provide educators and students the ability to check where they are at that moment in time, and educators can use the results to determine next steps for instruction.</p>\r\n<p>In Use 4, you will learn how to use IAB Success Criteria to help students &ldquo;Understand Scoring&rdquo;. Participants will view the presentation with their PLC and use the Use 4 Planning Guide to discuss IAB implementation and how it can be modified to best fit the needs of the selected group of students.</p>\r\n<p>Resources in the series:</p>\r\n<ol>\r\n<li>IAB Use Introduction: Using IABs to Support Student Learning</li>\r\n</ol>\r\n<ol>\r\n<li>IAB Use 1: Using Individual IAB Items with Students</li>\r\n<li>IAB Use 2: Using IABs as an Instructional Activity</li>\r\n<li>IAB Use 3: Using Standardized IABs as a Learning Check</li>\r\n<li>IAB Use 4: Using IABs as a Tool to Support Student Mastery</li>\r\n</ol>",
    "learningGoal": "<ul>\r\n<li>Participants will gain tips and ideas to intentionally use interim assessment blocks to gather and act on information about student learning.</li>\r\n</ul>",
    "successCriteria": "<ul>\r\n<li>Participants understand how to use an interim assessment block in one or more ways to gather and act on information about student learning.</li>\r\n<li>Participants can reflect on the process of using interims to gather information about student learning to inform instruction.</li>\r\n<li>Participants are prepared to implement next steps to move student learning forward.</li>\r\n</ul>"
  },
  "attachments": [
    {
      "category": "Supplemental Material",
      "fileType": 4,
      "fileExtension": "pdf",
      "name": "Interim Assessments Overview",
      "uri": "https://s3-us-west-2.amazonaws.com/api-dev.dl.smarterbalanced.org/Attachments/247/Interim+Assessments+Overview.pdf",
      "mimeType": "application/pdf"
    },
    {
      "category": "Supplemental Material",
      "fileType": 4,
      "fileExtension": "pdf",
      "name": "IAB Use 4: Presenter Notes",
      "uri": "https://s3-us-west-2.amazonaws.com/api-dev.dl.smarterbalanced.org/Attachments/247/IAB+Use+4_+Presenter+Notes.pdf",
      "mimeType": "application/pdf"
    },
    {
      "category": "Sample",
      "fileType": 4,
      "fileExtension": "pdf",
      "name": "IAB Use: Year at a Glance (Sample)",
      "uri": "https://s3-us-west-2.amazonaws.com/api-dev.dl.smarterbalanced.org/Attachments/247/IAB+Use_+Year+at+a+Glance+(Sample).pdf",
      "mimeType": "application/pdf"
    },
    {
      "category": "Presentation",
      "fileType": 5,
      "fileExtension": "pptx",
      "name": "IAB Use 4: Using IABS as a Tool to Support Student Mastery",
      "uri": "https://s3-us-west-2.amazonaws.com/api-dev.dl.smarterbalanced.org/Attachments/247/IAB+Use+4_+Using+IABS+as+a+Tool+to+Support+Student+Mastery.pptx",
      "mimeType": "application/vnd.openxmlformats-officedocument.presentationml.presentation"
    },
    {
      "category": "Handout",
      "fileType": 4,
      "fileExtension": "pdf",
      "name": "IAB Use 4: Planning Guide ",
      "uri": "https://s3-us-west-2.amazonaws.com/api-dev.dl.smarterbalanced.org/Attachments/247/IAB+Use+4_+Planning+Guide_.pdf",
      "mimeType": "application/pdf"
    },
    {
      "category": "Handout",
      "fileType": 6,
      "fileExtension": "docx",
      "name": "IAB Use 4 Survey Questions",
      "uri": "https://s3-us-west-2.amazonaws.com/api-dev.dl.smarterbalanced.org/Attachments/247/IAB+Use+4+Survey+Questions.docx",
      "mimeType": "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    }
  ],
  "stepByStep": [
    {
      "orderingIndex": 1,
      "title": "Clarify Intended Learning",
      "content": "<ul>\r\n<li>Share the learning goal and success criteria with the participants. Ask the participants what questions they have about the learning goal and success criteria.</li>\r\n</ul>"
    },
    {
      "orderingIndex": 2,
      "title": "Presentation",
      "content": "<ul>\r\n<li>Pass out the IAB Use 4: Planning Guide to each participant.</li>\r\n<li>Give the participants a few minutes to familiarize themselves with the guide and to read the questions.</li>\r\n<li>Present IAB Use 4: Using IABS as a Tool to Support Student Mastery to the PLC(s) using the IAB Use 4: Presenter Notes as your guide.</li>\r\n</ul>"
    },
    {
      "orderingIndex": 3,
      "title": "Discussion ",
      "content": "<ul>\r\n<li>Using <sbdl-tooltip title=\"Formative Assessment Strategy\"\n              class=\"strategy-link\"\n              text=\"<p>Students take a few minutes to think about a question or prompt individually. Then, they pair with a designated partner to compare thoughts before sharing with the whole class.</p>\"\n              readMoreUrl=\"/resource/43\"\n              style=\"white-space:nowrap;\"\n  ><sbdl-icon icon=\"strategies\"></sbdl-icon>\n  <span class=\"gradient-hover\">Think-Pair-Share </span\n></sbdl-tooltip>, as you present, give participants time to answer questions on slides 5, 10, 12, and 20. Give each participant 2-5 minutes to quietly finish responding to the questions before discussing as a PLC.</li>\r\n<li>Have PLCs turn to their group.</li>\r\n<li>Give participants 1&ndash;2 minutes to discuss their answers with their PLCs (i.e., each participant should have 1-2 minutes to share).\r\n<ol>\r\n<li>First, one partner speaks.</li>\r\n<li>Then, the other partner speaks.</li>\r\n<li>Continue until each participant in the PLC has been given time to speak.</li>\r\n</ol>\r\n</li>\r\n<li>Facilitate a follow-up discussion by prompting educators to share their &ldquo;aha&rsquo;s&rdquo; or &ldquo;new learning.&rdquo;</li>\r\n</ul>"
    },
    {
      "orderingIndex": 4,
      "title": "Wrap Up",
      "content": "<ul>\r\n<li>Ask the participants to share whether and how they met the learning goal and/or success criteria.</li>\r\n</ul>"
    },
    {
      "orderingIndex": 5,
      "title": "Follow Up",
      "content": "<ul>\r\n<li>It is recommended that you follow up with the PLC(s) after they have had a chance to implement the IAB Use.</li>\r\n<li>Use <sbdl-tooltip title=\"Formative Assessment Strategy\"\n              class=\"strategy-link\"\n              text=\"<p>This strategy provides students with information about what they did well in meeting the learning goal (the stars) and what the student needs to do (the stairs) to meet all the learning goals. Stars and Stairs feedback can come from the teacher, peers, or the students themselves.</p>\"\n              readMoreUrl=\"/resource/38\"\n              style=\"white-space:nowrap;\"\n  ><sbdl-icon icon=\"strategies\"></sbdl-icon>\n  <span class=\"gradient-hover\">Stars and Stairs</span\n></sbdl-tooltip> to discuss what went well (stars) and the next steps they need to take to in the process (stairs). You may also choose to use the IAB Pilot Use 4 Survey Questions.</li>\r\n</ul>"
    }
  ],
  "formativeAssessmentStrategies": [
    {
      "id": 38,
      "type": ResourceType.FormativeStrategy,
      "title": "Stars and Stairs",
      "description": "<p>This strategy provides students with information about what they did well in meeting the learning goal (the stars) and what the student needs to do (the stairs) to meet all the learning goals. Stars and Stairs feedback can come from the teacher, peers, or the students themselves.</p>"
    },
    {
      "id": 43,
      "type": ResourceType.FormativeStrategy,
      "title": "Think-Pair-Share ",
      "description": "<p>Students take a few minutes to think about a question or prompt individually. Then, they pair with a designated partner to compare thoughts before sharing with the whole class.</p>"
    }
  ],
  "thingsToConsider": ""
}

export const teaserCPContent: PlaylistResource = {
  "id": 213,
  "type": ResourceType.ConnectionsPlaylist,
  "teaser": false,
  "properties": {
    "authorOrg": "Smarter Balanced",
    "authors": [
      "Smarter Balanced Educators"
    ],
    "claims": [
      {
        "code": "ela-c2",
        "number": 2,
        "title": "Writing"
      }
    ],
    "grades": [
      {
        "code": "g6",
        "shortName": "6",
        "longName": "Grade 6"
      }
    ],
    "image": "https://s3-us-west-2.amazonaws.com/api-dev.dl.smarterbalanced.org/Images/svg/ELA_Langauge-and-Vocabulary-Use.svg",
    "lastUpdatedDate": new Date("2020-01-01T12:00:01.000Z"),
    "standards": [
      {
        "code": "ela-g6-l3a",
        "title": "L-3a",
        "description": "Choose language that expresses ideas precisely and concisely, recognizing and eliminating wordiness and redundancy.*"
      },
      {
        "code": "ela-g6-l6",
        "title": "L-6",
        "description": "Acquire and use accurately grade-appropriate general academic and domain-specific words and phrases; gather vocabulary knowledge when considering a word or phrase important to comprehension or expression."
      }
    ],
    "subject": {
      "code": "ela",
      "shortName": "ELA",
      "fullName": "English Language Arts"
    },
    "targets": [
      {
        "code": "ela-c2-g6-t8",
        "number": "8",
        "description": "Language & Vocabulary Use",
        "group": ""
      }
    ],
    "title": "Language and Vocabulary Use"
  },
  "overview": {
    "description": "<p>Students can produce effective and well-grounded writing for a range of purposes and audiences strategically using precise language and vocabulary (including academic words, domain-specific vocabulary, and figurative language) and style appropriate to the purpose and audience when revising or composing texts.</p>",
    "importance": "<ul>\r\n<li>Express ideas precisely.</li>\r\n<li>Use specific vocabulary that conveys shades of meaning.</li>\r\n<li>Determine appropriate vocabulary to convey experiences or events and/or to explain a topic.</li>\r\n<li>To ensure that a student&rsquo;s or author&rsquo;s message (for purpose and audience) comes through as intended, by using precise language and phrasing.</li>\r\n</ul>",
    "academicVocabulary": "<p>voice, tone, audience and purpose for writing (narrative, explanatory/informational, argumentative), concise and precise, concrete language, context [clues], figurative language, genre, phrase [note: students do not need to know the grammatical names of these phrases. Most&mdash;but not all&mdash;phrases used will include appositives, prepositional phrases, or verbal phrases (participial, gerund)], revise, sensory details, style, synonym, vocabulary in context, claim, counterclaim, convince</p>",
    "interventionSuggestions": "<ul>\r\n<li>Scaffold lessons for students by providing a list of vocabulary, including synonyms.</li>\r\n<li>Have students work in pairs to generate precise words.</li>\r\n<li>Use technology resources to identify precise words or synonyms.</li>\r\n</ul>"
  },
  "topics": [
    {
      "title": "Precise Words / Phrases",
      "below": "<p>Identify more precise or concise words / phrases to avoid repetition and/or replace vague or overused phrases.</p>",
      "near": "<p>Select best precise or concise words / phrases to avoid repetition and/or replace vague or overused phrases.</p>",
      "above": "<p>Select more precise words and phrases while enhancing the message.</p>",
      "topicResources": [
        {
          "id": 120,
          "title": "Convey It Right: Be Precise",
          "type": ResourceType.Instructional
        }
      ]
    },
    {
      "title": "Language and Vocabulary in Narrative Text",
      "below": "<p>Identify descriptive details and precise words in narrative text that convey experiences and events by using domain-specific (Tier 2) words / phrases appropriate for audience and purpose.</p>",
      "near": "<p>Select descriptive details and precise words in narrative text that best convey experiences and events by using domain-specific (Tier 2) words / phrases appropriate for audience and purpose.</p>",
      "above": "<p>Analyze how descriptive details and precise words in narrative text best convey experiences and events by using domain-specific (Tier 2) words / phrases appropriate for genre, audience, and purpose.</p>",
      "topicResources": [
        {
          "id": 119,
          "title": "Back Words Vocabulary",
          "type": ResourceType.Instructional
        }
      ]
    },
    {
      "title": "Language and Vocabulary in Argumentative Text",
      "below": "<p>Identify precise words in an argumentative text that convey the reasoning presented using domain-specific (Tier 2) words / phrases appropriate for audience and purpose.</p>",
      "near": "<p>Select precise words that best convey the reasoning presented in argumentative text using domain-specific (Tier 2) words / phrases appropriate for audience and purpose.</p>",
      "above": "<p>Analyze how precise words convey the reasoning presented in argumentative text using domain-specific (Tier 2) words / phrases appropriate for audience and purpose.</p>",
      "topicResources": []
    },
    {
      "title": "Language and Vocabulary in Explanatory Text",
      "below": "<p>Identify descriptive details and precise words in an informational / explanatory text that convey ideas using domain-specific (Tier 2) words / phrases appropriate for audience and purpose.</p>",
      "near": "<p>Select descriptive details and precise words that best convey ideas in explanatory / informational text using domain-specific (Tier 2) words / phrases appropriate for audience and purpose.</p>",
      "above": "<p>Analyze how descriptive details and precise words in explanatory text best convey ideas using domain-specific (Tier 2) words / phrases appropriate for audience and purpose.</p>",
      "topicResources": [
        {
          "id": 122,
          "title": "Word Hunt!",
          "type": ResourceType.Instructional
        }
      ]
    },
    {
      "title": "Sensory / Figurative Language",
      "below": "<p>Identify sensory or figurative language to maintain audience and purpose.</p>",
      "near": "<p>Select best sensory or figurative language to maintain audience and purpose.</p>",
      "above": "<p>Analyze context to identify most effective sensory or figurative language.</p>",
      "topicResources": [
        {
          "id": 121,
          "title": "Shades of Meaning: From Vague to Precise",
          "type": ResourceType.Instructional
        }
      ]
    }
  ],
  "thingsToConsider": "<ul>\r\n<li>This target focuses on revising for clarity and precision without adding new meaning or information.</li>\r\n<li>This is to help understand author&rsquo;s craft and purpose.</li>\r\n<li>The student will demonstrate an understanding of the word &ldquo;precise&rdquo; by selecting a word appropriate to purpose, audience, and style to replace another word to convey a more exact meaning.</li>\r\n<li>This is focused on revising, not editing.</li>\r\n</ul>",
  "attachments": []
};
